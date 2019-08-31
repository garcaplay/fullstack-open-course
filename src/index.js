import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Courseinfo from './courseinfo/index'; 

const App = () => {
    
    return(
        <Switch>
<Route exact path="/" component={Home}/>
            <Route path="/courseinfo" component={Courseinfo} />
           
        </Switch>
    )
}

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'))
