import React from 'react';
import Stripes from './Stripes';
import Text from './Text';
import MobileText from './MobileText';
import {FeaturedWrapper, MobileWrapper} from './featured.style';

const Featured = () => {
    return (
        <div>
            <FeaturedWrapper>
                <Stripes/>
                <Text/>
            </FeaturedWrapper>  
            
            <MobileWrapper>
                <MobileText/>
            </MobileWrapper>
        </div>
    );
};

export default Featured;