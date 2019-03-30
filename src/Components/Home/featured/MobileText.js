import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Eagles from '../../../Resources/images/logos/Eagles_second_main.png';
import Trophy from '../../../Resources/images/logos/trophy.png'

const MobileText = () => {
    return (
        <Fade delay={1000}>
            <div className="trophy_image" style={{background: `url(${Trophy})`}}>
                <Slide left delay={500}>
                    <div className="mobile_header">
                       SuperBowl 
                    </div>
                </Slide>
                
                <Fade delay={800}>
                    <div className="mobile_image" style={{background: `url(${Eagles})`}}>
                    </div>
                </Fade>
                
                <Slide right delay={500}>
                    <div className="mobile_header_two">
                       Champions
                    </div>
                </Slide>
            </div>
        </Fade>
        
    );
};

export default MobileText