import React from 'react';
import { Link } from 'react-router-dom';

import eagleslogo from '../../Resources/images/logos/eagles_circle_logo.png'

export const TeamLogo = (props) => {
    
    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background: `url(${eagleslogo}) no-repeat`
        }}
    ></div>
    
    if(props.link){
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
        
    } else {
        return template
    }
}