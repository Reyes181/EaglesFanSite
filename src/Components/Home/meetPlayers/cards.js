import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Ajayi from '../../../Resources/images/players/player_to_uploadNFL/Offense/RB/Jay_Ajayi.png';
import Foles from '../../../Resources/images/players/player_to_uploadNFL/Offense/QB/Nick_Foles.png';
import Cox from '../../../Resources/images/players/player_to_uploadNFL/Deffense/DT/Fletcher_Cox.png';
import Graham from '../../../Resources/images/players/player_to_uploadNFL/Deffense/DE/Brandon_Graham.png';
import PlayerCard from '../../ui/playerCard';



class HomeCards extends Component {
    state = {
        show: this.props.show,
        cards: [
            {  
                bottom: 90,
                left: 300,
                number:"9",
                name:"Nick",
                lastname:"Foles",
                bck:Foles
            },
            {
                bottom: 60,
                left: 200,
                number:"91",
                name:"Fletcher",
                lastname:"Cox",
                bck:Cox
            },
            {
                bottom: 30,
                left: 100,
                number:"55",
                name:"Brandon",
                lastname:"Graham",
                bck:Graham
            },
            {
                bottom: 0,
                left: 0,
                number:"26",
                name:"Jay",
                lastname:"Ajayi",
                bck:Ajayi
            }
        ]
    }
    
    
    showAnimateCards = () => (
        this.state.cards.map((card,i)=>(
             <Animate
                key={i}
                show={this.props.show}
                
                start={{
                    left:0,
                    bottom: 0
                }}
                
                enter={{
                    left: [card.left],
                    bottom: [card.bottom],
                    timing: {delay: 1000, durations: 7000, ease: easePolyOut}
                }}
             >
                {({left, bottom})=>{
                    return (
                        <div
                            style={{
                                position: 'absolute',
                                left,
                                bottom
                            }}
                        >
                            <PlayerCard
                                number={this.state.cards[i].number}
                                name={this.state.cards[i].name}
                                lastname={this.state.cards[i].lastname}
                                bck={this.state.cards[i].bck}  
                            />
                        </div>
                    )
                }}
             </Animate>   
        ))
    )
    
    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>    
        );
    }
}

export default HomeCards;