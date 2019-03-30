import React, { Component } from 'react';
import PlayerCard from '../ui/playerCard';
import Fade from 'react-reveal/Fade';
import Stripes from '../../Resources/images/stripes.png';
import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../ui/misc';
import { Promise } from 'core-js';
import CircularProgress from '@material-ui/core/CircularProgress';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';





class TheTeam extends Component {
    
    state = {
        loading:true,
        players:[],
        value: 0
    }
    
    componentDidMount(){
        firebasePlayers.once('value').then(snapshot =>{
            const players = firebaseLooper(snapshot);
            let promises = [];
            
            for(let key in players){
                promises.push(
                  new Promise((resolve,reject)=>{
                     firebase.storage().ref('players')
                     .child(players[key].image).getDownloadURL()
                     .then( url => {
                         players[key].url = url;
                         resolve();
                     })
                  })  
                )
            }
            
            Promise.all(promises).then(()=>{
                this.setState({
                    loading:false,
                    players
                })
            })
        })
    }
    
    showplayersByCategory = (category) => (
        this.state.players ?
            this.state.players.map((player,i)=>{
                return player.position === category ?
                    <Fade left delay={i*10} key={i}>
                        <div className="item">
                            <PlayerCard
                                number={player.number}
                                name={player.name}
                                lastname={player.lastname}
                                bck={player.url}
                            />
                        </div>
                    </Fade>
                :null
            })
        :null
    )
    
    handleChange = (event, value) => {
       this.setState({ value });
    };
    
    render(){
        const { value } = this.state;
        return (
            <div className="the_team_container"
                style={{
                    background: `url(${Stripes}) repeat`
                }}
            >   
                <nav position="static" style={{color: 'white', backgroundColor: '#000000'}}>
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab style={{fontFamily: 'Sporting', letterSpacing: '2px'}} label="Offense" />
                    <Tab style={{fontFamily: 'Sporting', letterSpacing: '2px'}} label="Defense" />
                    <Tab style={{fontFamily: 'Sporting', letterSpacing: '2px'}} label="Special Teams" />
                  </Tabs>
                </nav>
                { !this.state.loading ? 
                <div>
                    {value === 0 &&
                        <div>
                            <div className="team_category_wrapper">
                                <div className="title">Quaterbacks</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Quaterback')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Runningbacks</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Runningback')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Centers</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Center')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Wide Receivers</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Widereceiver')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Tight Ends</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Tightend')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Offensive Tackle</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Offensivetackle')}
                                </div>
                            </div>
                        </div>
                    }
                    {value === 1 &&
                        <div>
                            <div className="team_category_wrapper">
                                <div className="title">Cornerbacks</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Cornerback')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Defensive Ends</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Defensiveend')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Defensive Tackle</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Defensivetackle')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Linebackers</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Linebacker')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Safties</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Safety')}
                                </div>
                            </div>
                        </div>
                    }
                    {value === 2 && 
                        <div>
                            <div className="team_category_wrapper">
                                <div className="title">Long Snappers</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Longsnapper')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Place Kickers</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Placekicker')}
                                </div>
                            </div>
                        </div>
                    }
                    {value === 3 && 
                        <div>
                            <div className="team_category_wrapper">
                                <div className="title">Long Snappers</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Longsnapper')}
                                </div>
                            </div>
                            
                            <div className="team_category_wrapper">
                                <div className="title">Place Kickers</div>
                                <div className="team_cards">
                                    {this.showplayersByCategory('Placekicker')}
                                </div>
                            </div>
                        </div>
                    }
                </div>
                    
                    :
                    <div className="admin_progress">
                        <CircularProgress
                             style={{ 
                                color: '#004C54'
                             }} 
                             thickness={7}
                        />
                        : ''
                    </div>
                }
            
            </div>    
        );
    }
}

export default TheTeam;