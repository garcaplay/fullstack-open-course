import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Courseinfo from './courseinfo/index'; 
import Unicafe from './unicafe/index';
import Anecdotes from './anecdotes/index';

const App = () => {
    
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/courseinfo" component={Courseinfo} />
            <Route path="/unicafe" component={Unicafe}/>
            <Route path="/anecdotes" component={Anecdotes}/>
        </Switch>
    )
}

export default App;