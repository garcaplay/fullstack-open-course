import React, { Fragment} from 'react';
import Header from './Header';
import Content from './Content';

const Subjects = (props)=>{

return (
    <Fragment>
        <Header name={props.subjects.name}/>
        <Content parts={props.subjects.parts}/>
    </Fragment>)
}
export default Subjects;