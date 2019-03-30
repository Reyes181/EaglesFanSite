import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="match_container">
                <div
                    className="tag"
                >
                    Matches
                </div>
                
                <Blocks/>
                
                <Tag
                    bck='#000000'
                    size='32px'
                    color='#ACC0C6'
                    link={true}
                    linkto='/the_matches'
                >
                    See entire schedule
                </Tag>
            </div>
        </div>    
    );
};

export default MatchesHome;