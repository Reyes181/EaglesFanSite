import React, { Component } from 'react';
import {AD} from './promotion.style';

class Ad extends Component {
    state ={
        imageURLs: [
            'https://res.cloudinary.com/reyes181/image/upload/v1539061729/random/bestbuy_ad.png',
            'https://res.cloudinary.com/reyes181/image/upload/v1539061714/random/creditkarma_ad.png',
            'https://res.cloudinary.com/reyes181/image/upload/v1538976784/random/chipsahoy_ad.png',
            'https://res.cloudinary.com/reyes181/image/upload/v1539062591/random/geico_ad.png',
            'https://res.cloudinary.com/reyes181/image/upload/v1539063257/random/pringles_ad.png',
            'https://res.cloudinary.com/reyes181/image/upload/v1539064007/random/mortalengines_ad.png',
            'https://res.cloudinary.com/reyes181/image/upload/v1539065483/random/target_ad.png',
            'https://res.cloudinary.com/reyes181/image/upload/v1540095702/random/nintendo_ad.png',
            'https://res.cloudinary.com/reyes181/image/upload/v1540095724/random/fitbit_ad.png'
        ]
    }
    
    getImageTag = () => {
        var img = '"';
        var randomIndex = Math.floor(Math.random() * this.state.imageURLs.length);
        img += this.state.imageURLs[randomIndex];
        img += '"';
        return img;
    }
    
    render() {
        return (
            <AD
                style={{
                    background: `url(${this.getImageTag()})`,
                }}
            >
                <i className="fa fa-window-close" aria-hidden="true"></i>
            </AD>    
        );
    }
}

export default Ad;