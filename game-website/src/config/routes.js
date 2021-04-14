import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import CreateLobby from '../pages/CreateLobby.js';
// import Game from '../pages/Game';

const routes = (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/createlobby' component={CreateLobby} />
        {/* <Route path='/game' component={Game} /> */}
    </Switch>
)

export default routes;