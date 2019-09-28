import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content';

const Subject = (props)=>{
    return(
        <Fragment>
            <Header name={props.subject.name}/>
            <Content parts={props.subject.parts}/>
        </Fragment>
    )
}

export default Subject;
