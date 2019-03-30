import React from 'react';
import PromotionAnimation from './Animation';
import Enroll from './Enroll';
import Ad from './Ad';

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background:'#ffffff'}}>
            <div className="container">
                <PromotionAnimation/>
                <Enroll/>
                <Ad/>
            </div>
        </div>    
    );
};

export default Promotion;