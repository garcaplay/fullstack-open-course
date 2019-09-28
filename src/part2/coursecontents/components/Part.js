import React from 'react';

const Part = (props) => {
    return (
        <li>
            <h3>{props.data.name}</h3>
            <p>Exercises: {props.data.exercises}</p>
        </li>
    )
}

export default Part;