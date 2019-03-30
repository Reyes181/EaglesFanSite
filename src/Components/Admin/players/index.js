import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';
import { firebasePlayers } from '../../../firebase';
import { firebaseLooper } from '../../ui/misc';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import orderBy from 'lodash/orderBy';
import CircularProgress from '@material-ui/core/CircularProgress';

// const invertDirection = {
//     asc: "desc",
//     desc: "asc"
// }


class AdminPlayers extends Component {
    
    state= {
        isloading: true,
        players: []
        // columnToSort: '',
        // sortDirection: 'desc'
    }
    
    componentDidMount(){
        firebasePlayers.once('value').then((snapshot)=>{
            const players = firebaseLooper(snapshot);
            
            this.setState({
                isloading: false,
                players: (players)
            })
        })
    }
    

    // handleSort = columnName => {
    //     this.setState(state => ({
    //         columnToSort: columnName,
    //         sortDirection: state.columnToSort === columnName ? 
    //                         invertDirection[state.sortDirection] : "asc"
    //     }));
    // }
    
    
    render() {
        return (
            <AdminLayout>
                <div style={{paddingTop: '20px'}}>
                    
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Team Position</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Number</TableCell>
                                    <TableCell>Position</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { this.state.players ?
                                    this.state.players.map((player,i)=>(
                                        <TableRow key={i}>
                                            <TableCell>
                                                {player.teamPosition}
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/admin_players/add_edit_players/${player.id}`}>
                                                    {player.name}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/admin_players/add_edit_players/${player.id}`}>
                                                    {player.lastname}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                {player.number}
                                            </TableCell>
                                            <TableCell>
                                                {player.position}
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
        )
    }
}

export default AdminPlayers