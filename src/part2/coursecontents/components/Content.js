import React, {Fragment} from 'react';
import Part from './Part';
import Total from './Total';

const Content = (props) => {

    return (
        <Fragment>
            <ul>
                {props.parts.map( part =>{
                    return <Part key={part.id} data={part}/>
                })}
            </ul>
            <Total parts={props.parts}/>
        </Fragment>
    )
}

export default Content;