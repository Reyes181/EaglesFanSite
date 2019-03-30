import React, { Component } from 'react';
import { firebaseDB } from '../../firebase';
import { firebaseLooper } from '../ui/misc';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const style ={
    cell:{
        padding: '4px 16px 4px 11px',
        borderBottom: '1px solid #ffffff',
        color: '#ffffff',
        textAlign: 'center'
    }
}


class LeagueTable extends Component {

    state = {
        positions:[]
    }

    componentDidMount(){
        firebaseDB.ref('positions').once('value').then((snapshot) => {
            const positions = firebaseLooper(snapshot);

            this.setState({
                positions: positions
            })
        })
    }


    showTeampositions = (pos) => (
        pos ?
            pos.map((pos,i)=>(
                <TableRow key={i}>
                    <TableCell style={style.cell}>{pos.div}</TableCell>
                    <TableCell style={style.cell}>{pos.team}</TableCell>
                    <TableCell numeric style={style.cell}>{pos.wins}</TableCell>
                    <TableCell numeric style={style.cell}>{pos.losses}</TableCell>
                    <TableCell numeric style={style.cell}>{pos.ties}</TableCell>
                    <TableCell style={style.cell}>{pos.conf}</TableCell>
                </TableRow>
            ))
            :null
    )

    
   

    render() {
        
        return (
            <div className="league_table_wrapper">
                <div className="title">
                    NFL Standings
                </div>
                <div style={{background: '#004C54'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={style.cell}>Div</TableCell>
                            <TableCell style={style.cell}>Team</TableCell>
                            <TableCell style={style.cell}>W</TableCell>
                            <TableCell style={style.cell}>L</TableCell>
                            <TableCell style={style.cell}>T</TableCell>
                            <TableCell style={style.cell}>Conf</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.showTeampositions(this.state.positions)}
                    </TableBody>
                </Table>
                </div>
            </div>
        )
    }
};


export default LeagueTable;