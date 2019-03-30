import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper } from '../../ui/misc';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Moment from 'react-moment';

class AdminMatches extends Component {
    
    state = {
        isloading: true,
        matches: []
    }
    
    componentDidMount(){
        firebaseMatches.once('value').then(snapshot=> {
            const matches = firebaseLooper(snapshot);
            
            this.setState({
                isloading: false,
                matches:(matches)
            })
        })
    }
    
    render() {
        return (
            <AdminLayout>
                <div>
                    
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Match</TableCell>
                                    <TableCell>Result</TableCell>
                                    <TableCell>Final</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { this.state.matches ?
                                    this.state.matches.map((match,i)=>(
                                        <TableRow key={i}>
                                            <TableCell>
                                                <Moment format='LL'>{match.date}</Moment>
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/admin_matches/add_edit_match/${match.id}`}>
                                                    <img  
                                                        src={`/images/team_iconsNFL/${match.awayThmb}.png`}
                                                        alt={`${match.awayThmb}`}
                                                        style={{width: '30px', height:"30px", paddingRight: '5px'}}
                                                    />
                                                    {match.away} <strong style={{padding: '0 10px'}}>---</strong> {match.local}
                                                    <img  
                                                        src={`/images/team_iconsNFL/${match.localThmb}.png`}
                                                        alt={`${match.localThmb}`}
                                                        style={{width: '30px', height:"30px", paddingLeft: '5px'}}
                                                    />
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                {match.resultAway} <strong>-</strong> {match.resultLocal}
                                            </TableCell>
                                            <TableCell>
                                                { match.final === "Yes" ?
                                                    <span className="matches_tag_red">Final</span>
                                                    :
                                                    <span className="matches_tag_green">Not Played</span>
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    
                                    :null
                                    
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                    
                    <div className="admin_progress">
                        { this.state.isloading ?
                            <CircularProgress
                                 style={{ color: '#004C54' }} thickness={7}
                            />
                            : ''
                        }
                    </div>
                </div>
            </AdminLayout>    
        );
    }
}

export default AdminMatches;