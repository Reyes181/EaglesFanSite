import React from 'react';
import Layout from './Hoc/Layout';
import { Switch} from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/privateRoutes';
import PublicRoute from './Components/AuthRoutes/publicRoutes';

import Home from './Components/Home';
import SignIn from './Components/SignIn';
import TheTeam from './Components/TheTeam';
import TheMatches from './Components/TheMatches';
import NotFound from './Components/ui/not_found';

import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/matches';
import AddEditMatch from './Components/Admin/matches/addEditMatch';
import AdminPlayers from './Components/Admin/players';
import AddEditPlayers from './Components/Admin/players/addEditPlayers';

const Routes = (props) => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <PrivateRoute {...props} path="/admin_players/add_edit_players" exact component={AddEditPlayers} />
          <PrivateRoute {...props} path="/admin_players/add_edit_players/:id" exact component={AddEditPlayers} />
          <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers} />
          <PrivateRoute {...props} path="/admin_matches/add_edit_match" exact component={AddEditMatch} />
          <PrivateRoute {...props} path="/admin_matches/add_edit_match/:id" exact component={AddEditMatch} />
          <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches} />
          <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />
          <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
          <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
          <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
          <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
          <PublicRoute {...props} restricted={false} component={NotFound}/>
        </Switch>
      </Layout>
    </div>  
  )
}

export default Routes;
