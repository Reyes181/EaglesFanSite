import React from 'react';
import { TeamLogo } from '../ui/icons';
import { Link } from 'react-router-dom';
import {EaglesFooter} from './headerfooter.style';

const Footer = () => {
    return (
        <EaglesFooter style={{background:'#000000'}}>
        
                <div className="img_cover">
                    <TeamLogo
                        width="60px"
                        height="60px"
                        link={true}
                        linkTo="/"
                    />
                </div>
        
                <p style={{color: '#A5ACAF'}}>Green Is For The Birds. All copyright reserved @2018 <Link to="/sign_in" id='header_buttons' >ER</Link> </p>
                
                <div>
                    <p>@philadelphiaeagles</p>
                    <ul>
                          <li>
                            <a href="https://www.instagram.com/philadelphiaeagles/?hl=en">
                                <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                            </a>
                          </li>
                          
                          <li>
                            <a href="https://www.facebook.com/philadelphiaeagles/">
                                <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                            </a>
                          </li>
                          
                          <li>
                            <a href="https://twitter.com/Eagles?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                                <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                            </a>
                          </li>
                    </ul>
                </div>
            
        </EaglesFooter>    
    );
};

export default Footer;