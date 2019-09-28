import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Courseinfo from './part1/courseinfo/index'; 
import Unicafe from './part1/unicafe/index';
import Anecdotes from './part1/anecdotes/index';
import CourseContents from './part2/coursecontents/index';
import Phonebook from './part2/phonebook/index';

const App = () => {
    
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/courseinfo" component={Courseinfo} />
            <Route path="/unicafe" component={Unicafe}/>
            <Route path="/anecdotes" component={Anecdotes}/>
            <Route path="/coursecontents" component={CourseContents}/>
            <Route path="/phonebook" component={Phonebook}/>
        </Switch>
    )
}

export default App;