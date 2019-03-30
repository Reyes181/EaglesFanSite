import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { TeamLogo } from '../ui/icons';
import {HeaderLinks, Nav} from './headerfooter.style';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: "#004C54",
                    boxShadow: "none",
                    padding: "0.625em 0",
                    borderBottom: "0.125em solid #000000"
                }}
            >
            
                <ToolBar>
                    <HeaderLinks>
                        <div className="header_logo">
                            <TeamLogo
                                link={true}
                                linkTo="/"
                                width="60px"
                                height="60px"
                            />
                        </div>
                    
                    <Nav>
                        <Link to="/the_team">
                            <Button id='header_buttons' color="inherit" style={{fontFamily: 'NFLEagles'}}>Players</Button>
                        </Link>
                        
                        <Link to="/the_matches">
                            <Button id='header_buttons' color="inherit" style={{fontFamily: 'NFLEagles'}}>Schedule</Button>
                        </Link>
                    </Nav>
                    
                    </HeaderLinks>
                    
                
                </ToolBar>
            
            </AppBar> 
        );
    }
}

export default Header;