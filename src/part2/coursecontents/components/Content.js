import React from 'react';
import Part from './Part';
const Content = (props) => {

    return (
        <ul>
            {props.parts.map( part =>{
                return <Part key={part.id} data={part}/>
            })}
        </ul>
    )
}

export default Content;