import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import HomeCards from './cards';
import Ajayi from '../../../Resources/images/players/player_to_uploadNFL/Offense/RB/Jay_Ajayi.png';
import {CenterWrapper, MeetWrapper, EaglesPlayer, PlayerCardWrapper, PlayerCardThumb, PlayerCardInfo, PlayerCardName, PlayerCardNumber,
        TextWrapper, TextHeader
        } from './meet.style';

class MeetPlayers extends Component {
    state= {
        show:false
    }
    
    render() {
        return (
            <Reveal
                // fraction={0.7}
                onReveal={()=>{
                   this.setState({
                       show:true
                   }) 
                }}
            >
                <div className="home_meetplayers"
                    style={{background: `#ffffff url(${Stripes})`}}
                >
                   <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <HomeCards
                                    show={this.state.show}
                                />
                            </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <Tag bck="#004C54" size="100px" color="#ffffff"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        Meet
                                    </Tag>
                                </div>
                                <div>
                                    <Tag bck="#004C54" size="100px" color="#ffffff"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        The
                                    </Tag>
                                </div>
                                <div>
                                    <Tag bck="#004C54" size="100px" color="#ffffff"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        Players
                                    </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="#000000" 
                                        size="27px" 
                                        color="#ACC0C6"
                                        link={true}
                                        linkto="/the_team"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '27px',
                                            border: '1px solid #ACC0C6'
                                        }}
                                    >
                                        Click here to meet
                                    </Tag>
                                </div>
                            </div>
                        </div>
                   </div> 
                </div>
                
                <CenterWrapper style={{background: `url(${Stripes})`}}>
                    <MeetWrapper>
                        
                        <Slide left>
                            <EaglesPlayer>
                            
                                <PlayerCardWrapper>
                                    <PlayerCardThumb
                                        style={{background: `#f2f9ff url(${Ajayi})`}}
                                    ></PlayerCardThumb>
                                    <PlayerCardInfo>
                                        <PlayerCardNumber>
                                            26
                                        </PlayerCardNumber>
                                        <PlayerCardName>
                                            <span>Jay</span>
                                            <span>Ajayi</span>
                                        </PlayerCardName>
                                    </PlayerCardInfo>
                                </PlayerCardWrapper>  
                                
                            </EaglesPlayer>
                        </Slide>
                        
                        <Slide right>
                            <TextWrapper>
                                <div>
                                    <TextHeader>
                                        Meet
                                    </TextHeader>
                                </div>
                                <div>
                                    <TextHeader>
                                        The
                                    </TextHeader>
                                </div>
                                <div>
                                    <TextHeader>
                                        Players
                                    </TextHeader>
                                </div>
                                <div>
                                    <Tag
                                        bck="#000000" 
                                        size="18px" 
                                        color="#ACC0C6"
                                        link={true}
                                        linkto="/the_team"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px',
                                            border: '1px solid #ACC0C6'
                                        }}
                                    >
                                        Click here to meet
                                    </Tag>
                                </div>
                            </TextWrapper>
                        </Slide>
                        
                    </MeetWrapper>
                </CenterWrapper>
            </Reveal>
        );
    }
}

export default MeetPlayers;