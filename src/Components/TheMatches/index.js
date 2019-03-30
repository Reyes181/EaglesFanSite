import React, { Component } from 'react';
import LeagueTable from './table';
import MatchesList from './matches_list';
import Ad from '../Home/promotion/Ad';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper } from '../ui/misc';

class TheMatches extends Component {
    
    state = {
        isLoading: true,
        matches: [],
        filterMatches: [],
        playedFilter: 'All',
        resultFilter:'All',
        homeFilter: 'All'
    }
    
    componentDidMount(){
        firebaseMatches.once('value').then(snapshot=>{
            const matches = firebaseLooper(snapshot);
            
            this.setState({
                isLoading: false,
                matches: (matches),
                filterMatches: (matches)
            });
        });
    }
    
    showPlayed = (played) => {
        const list = this.state.matches.filter((match)=>{
            return match.final === played
        });
        this.setState({
            filterMatches: played === 'All' ? this.state.matches : list,
            playerFilter: played,
            resultFilter: 'All'
        })
    }
    
    showResult = (result) => {
        const list = this.state.matches.filter((match)=>{
            return match.result === result
        });
        this.setState({
            filterMatches: result === 'All' ? this.state.matches : list,
            playerFilter: 'All',
            resultFilter: result
        })
    }
    
    showHome = (home) => {
        const list = this.state.matches.filter((match)=>{
            return match.home === home
        });
        this.setState({
            filterMatches: home === 'All' ? this.state.matches : list,
            playerFilter: 'All',
            resultFilter: 'All',
            homeFilter: home
        })
    }
    
    
    render() {
        const state = this.state;
        return (
            <div className="the_matches_container" style={{backgroundColor: '#ffffff'}}>
                <div className="the_matches_wrapper">
                    <div className="left">
                        <div className="match_filters">
                            <div className="match_filters_box">
                                <div className="tag" style={{letterSpacing: '2px'}}>Show Match</div>
                                <div className="cont">
                                    <div className={`option ${state.playerFilter === 'All'?'active':''}`}
                                        onClick={()=> this.showPlayed('All')}
                                    >
                                        All
                                    </div>
                                    <div className={`option ${state.playerFilter === 'Yes'?'active':''}`}
                                        onClick={()=> this.showPlayed('Yes')}
                                    >
                                        Played
                                    </div>
                                    <div className={`option ${state.playerFilter === 'No'?'active':''}`}
                                        onClick={()=> this.showPlayed('No')}
                                    >
                                        Not Played
                                    </div>
                                </div>
                            </div>
                            <div className="match_filters_box">
                                <div className="tag" style={{letterSpacing: '2px'}}>Result Game</div>
                                <div className="cont">
                                    <div className={`option ${state.resultFilter === 'All'?'active':''}`}
                                        onClick={()=> this.showResult('All')}
                                    >
                                        All
                                    </div>
                                    <div className={`option ${state.resultFilter === 'W'?'active':''}`}
                                        onClick={()=> this.showResult('W')}
                                    >
                                        W
                                    </div>
                                    <div className={`option ${state.resultFilter === 'L'?'active':''}`}
                                        onClick={()=> this.showResult('L')}
                                    >
                                        L
                                    </div>
                                    <div className={`option ${state.resultFilter === 'T'?'active':''}`}
                                        onClick={()=> this.showResult('T')}
                                    >
                                       T
                                    </div>
                                </div>
                            </div>
                            <div className="match_filters_box">
                                <div className="tag" style={{letterSpacing: '2px'}}>Home / Away</div>
                                <div className="cont">
                                    <div className={`option ${state.homeFilter === 'Yes'?'active':''}`}
                                        onClick={()=> this.showHome('Yes')}
                                    >
                                        Home
                                    </div>
                                    <div className={`option ${state.homeFilter === 'No'?'active':''}`}
                                        onClick={() => this.showHome('No')} 
                                    >
                                       Away
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <MatchesList matches={state.filterMatches}/>
                    </div>
                    <div className="right">
                        <LeagueTable/>
                        <div className="advert">
                        </div>
                        <div className="ad_banner">
                            <Ad/>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default TheMatches;