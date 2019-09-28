import React from 'react';

const Total = (props) => {
    const totalSum = props.parts.reduce((sum, part)=>{
        return sum + part.exercises;
    }, 0);
    return (
    <p>Total of <span style={{fontWeight:"bold"}}>{totalSum}</span> exercises</p>
    )
}

export default Total;