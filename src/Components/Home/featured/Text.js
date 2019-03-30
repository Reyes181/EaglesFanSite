import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import FeaturedPlayer from '../../../Resources/images/featured_player.png'
import {FeaturedNumber} from './featured.style';

class Text extends Component {
    
    animateNumber = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                rotate:0
            }}
            enter={{
                opacity:[1],
                rotate:[360],
                timing:{duration: 1000, ease:easePolyOut}
            }}
        >
            {({opacity, rotate})=> {
                return (
                    <FeaturedNumber
                         style={{
                             opacity,
                             transform: `translate(260px,250px) rotateY(${rotate}deg)`
                         }}
                    >
                       LII 
                    </FeaturedNumber>
                )
            }}
        </Animate>    
    )
    
    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:430
            }}
            enter={{
                opacity:[1],
                x:[264],
                y:[430],
                timing:{duration: 1000, ease:easePolyOut}
            }}
        >
            {({opacity, x, y})=> {
                return (
                    <div className="featured_first"
                         style={{
                             opacity,
                             transform: `translate(${x}px,${y}px)`
                         }}
                    >
                       SuperBowl 
                    </div>
                )
            }}
        </Animate>    
    )
    
    animateSecond = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:545
            }}
            enter={{
                opacity:[1],
                x:[264],
                y:[545],
                timing:{delay:300, duration: 1000, ease:easePolyOut}
            }}
        >
            {({opacity, x, y})=> {
                return (
                    <div className="featured_second"
                         style={{
                             opacity,
                             transform: `translate(${x}px,${y}px)`
                         }}
                    >
                       Championship
                    </div>
                )
            }}
        </Animate>   
    )
    
    animatePlayer = () => (
        <Animate
            show={true}
            start={{
                opacity:0
            }}
            enter={{
                opacity:[1],
                timing:{delay:800, duration: 1000, ease:easePolyOut}
            }}
        >
            {({opacity})=> {
                return (
                    <div className="featured_player"
                         style={{
                             opacity,
                             background:`url(${FeaturedPlayer})`,
                             transform: `translate(650px,85px)`
                         }}
                    >
                    </div>
                )
            }}
        </Animate>  
    )
    
    render() {
        return (
            <div className='featured_text'>
                {this.animatePlayer()}
                {this.animateNumber()}
                {this.animateFirst()}
                {this.animateSecond()}
            </div>    
        );
    }
}

export default Text;