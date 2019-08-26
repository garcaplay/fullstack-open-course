import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
    const course = "Half Stack application development";

    return(
        <div>
            <Header course={course}/>
            <Content/>
            <Total/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
