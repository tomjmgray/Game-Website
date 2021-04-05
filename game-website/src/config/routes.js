import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
// import Lobby from '../pages/Lobby';
// import Game from '../pages/Game';

const routes = (
    <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/lobby' component={Lobby} />
        <Route path='/game' component={Game} /> */}
    </Switch>
)

export default routes;