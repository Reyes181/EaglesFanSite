import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

import Fileuploader from '../../ui/fileuploader';
import { firebasePlayers, firebaseDB, firebase } from '../../../firebase';


class AddEditPlayers extends Component {
    
    state = {
        playerId:'',
        formType:'',
        formError: false,
        formSuccess:'',
        defaultImg:'',
        formdata: {
            name:{
                element:'input',
                value:'',
                config:{
                    label: 'Player Name',
                    name: 'name_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel:true
            },
            lastname:{
                element:'input',
                value:'',
                config:{
                    label: 'Player Last Name',
                    name: 'lastnamename_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel:true
            },
            number:{
                element:'input',
                value:'',
                config:{
                    label: 'Player Number',
                    name: 'number_input',
                    type: 'number'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel:true
            },
            teamPosition:{
                element:'select',
                value:'',
                config:{
                    label: 'Select team position',
                    name: 'select_teamposition',
                    type: 'select',
                    options: [
                        {key:'Offense',value:'Offense', positions: [
                            {key:'Quaterback', value:'Quaterback'},
                            {key:'Runningback', value:'Runningback'},
                            {key:'Center', value:'Center'},
                            {key:'Gaurd', value:'Gaurd'},
                            {key:'Widereceiver', value:'Wide Receiver'},
                            {key:'Tightend', value:'Tight End'},
                            {key:'Offensivetackle', value:'Offensive Tackle'}
                        ]},
                        {key:'Deffense',value:'Deffense', positions: [
                            {key:'Cornerback', value:'Cornerback'},
                            {key:'Defensiveend', value:'Defensive End'},
                            {key:'Defensivetackle', value:'Defensive Tackle'},
                            {key:'Linebacker', value:'Linebacker'},
                            {key:'Safety', value:'Safety'}
                        ]},
                        {key:'Special Teams', value:'Special Teams', positions: [
                            {key:'Longsnapper', value:'Long Snapper'},
                            {key:'Placekicker', value:'Place Kicker'},
                            {key:'Punter', value:'Punter'}
                        ]}
                    ],
                    selectedPosition: 'Offense'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel:true
            },
            position:{
                element:'select',
                value:'',
                config:{
                    label: 'Select position',
                    name: 'select_position',
                    type: 'select',
                    options: [
                        {key:'Quaterback', value:'Quaterback'},
                        {key:'Runningback', value:'Runningback'},
                        {key:'Center', value:'Center'},
                        {key:'Gaurd', value:'Gaurd'},
                        {key:'Widereceiver', value:'Wide Receiver'},
                        {key:'Tightend', value:'Tight End'},
                        {key:'Offensivetackle', value:'Offensive Tackle'},
                        {key:'Cornerback', value:'Cornerback'},
                        {key:'Defensiveend', value:'Defensive End'},
                        {key:'Defensivetackle', value:'Defensive Tackle'},
                        {key:'Linebacker', value:'Linebacker'},
                        {key:'Safety', value:'Safety'},
                        {key:'Longsnapper', value:'Long Snapper'},
                        {key:'Placekicker', value:'Place Kicker'},
                        {key:'Punter', value:'Punter'}
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel:true
            },
            image:{
                element:'image',
                value:'',
                validation:{
                    required: true
                },
                valid: true
            }
        }
    }
    
    // handleChange(e){
    //     this.setState({selectedPosition: e.target.value})
    // }
    
    updateFields = (player, playerId, formType, defaultImg)=> {
        const newFormdata = {...this.state.formdata}
        
        for(let key in newFormdata){
            newFormdata[key].value = player[key];
            newFormdata[key].valid = true
        }
        
        this.setState({
            playerId,
            defaultImg,
            formType,
            formdata: newFormdata
        })
    }
    
    componentDidMount(){
        const playerId = this.props.match.params.id;
        
        if(!playerId){
            this.setState({
                formType:'Add player'
            })
        } else {
            firebaseDB.ref(`players/${playerId}`).once('value')
            .then(snapshot => {
                const playerData = snapshot.val();
                
                firebase.storage().ref('players')
                .child(playerData.image).getDownloadURL()
                .then( url => {
                    this.updateFields(playerData, playerId, 'Edit player', url)
                }).catch( error => {
                    this.updateFields({
                        ...playerData,
                        image:''
                    }, playerId, 'Edit player', '')
                })
            })
        }
    }
    
    updateForm(element, content = ''){
        const newFormdata = {...this.state.formdata};
        const newElement = {...newFormdata[element.id]};
        
        if(content === ''){
            newElement.value = element.event.target.value;
        } else {
            newElement.value = content
        }
        
        let validData = validate(newElement);
        
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]
        
        newFormdata[element.id] = newElement;
        
        this.setState({
            formError: false,
            formdata: newFormdata
        });
    }
    
    successForm = (message) => {
        this.setState({
            formSuccess: message
        });
        
        setTimeout(()=>{
            this.setState({
                formSuccess:''
            });
        },2500)
    }
    
    submitForm(event){
        event.preventDefault();
        
        let dataToSubmit = {};
        let formIsValid = true;
        
        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
        
        if(formIsValid){
            if(this.state.formType === 'Edit player'){
                firebaseDB.ref(`players/${this.state.playerId}`)
                .update(dataToSubmit).then(()=> {
                    this.successForm('Updated correctly')
                }).catch(error =>{
                    this.setState({formError: true})
                })
                
            } else {
                firebasePlayers.push(dataToSubmit).then(()=>{
                    this.props.history.push('/admin_players');
                }).catch(e=>{
                    this.setState({
                        formError: true
                    });
                });
            }
        } else {
            this.setState({
                formError: true
            });
        }
    }
    
    resetImage = () => {
        const newFormdata = {...this.state.formdata};
        newFormdata['image'].value = '';
        newFormdata['image'].valid = false;
        this.setState({
            defaultImg:'',
            formdata: newFormdata
        });
    }
    
    storeFilename = (filename) => {
        this.updateForm({id:'image'},filename);
    }
    
    
    render() {
        //  let position = this.state.formdata.teamPosition.config.options.filter(position => {
        //       return position.value === this.state.formdata.teamPosition.config.selectedPosition
        // })
        return (
            <AdminLayout>
                
                <div className="editplayers_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event)=> this.submitForm(event)}>
                        
                            <Fileuploader
                                dir="players"
                                tag={"Player image"}
                                defaultImg={this.state.defaultImg}
                                defaultImgName={this.state.formdata.image.value}
                                resetImage={()=> this.resetImage()}
                                filename={(filename)=> this.storeFilename(filename)}
                            />
                            
                            <FormField
                                id={'name'}
                                formdata={this.state.formdata.name}
                                change={(element)=> this.updateForm(element)}
                            />
                            
                            <FormField
                                id={'lastname'}
                                formdata={this.state.formdata.lastname}
                                change={(element)=> this.updateForm(element)}
                            />
                            
                            <FormField
                                id={'number'}
                                formdata={this.state.formdata.number}
                                change={(element)=> this.updateForm(element)}
                            />
                            
                            <FormField
                                // value={this.state.selectedPosition} onChange={this.handleChange.bind(this)}
                                id={'teamPosition'}
                                formdata={
                                    // this.state.formdata.teamPosition.config.options.map((teamPosition, i) => {
                                    //   return <option>{teamPosition.value}</option>
                                    // })
                                    this.state.formdata.teamPosition
                                }
                                change={(element)=> this.updateForm(element)}
                            />
                            
                            <FormField
                                id={'position'}
                                formdata={
                                    this.state.formdata.position
                                }
                                change={(element)=> this.updateForm(element)}
                            />
                            
                            <div className="success_label">{this.state.formSuccess}</div>
                            {this.state.formError ?
                                <div className="error_label">
                                    Something went wrong on edits
                                </div>
                                : ''
                            }
                            
                            <div className="admin_submit">
                                <button onClick={(event)=> this.submitForm(event)}>
                                    {this.state.formType}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </AdminLayout>    
        );
    }
}

export default AddEditPlayers;