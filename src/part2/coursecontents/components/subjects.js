import React from 'react';

import Subject from './Subject';

const Subjects = (props)=>{

    return (
        <ul>{props.subjects.map(subject=>{
            return <Subject key={subject.id} subject={subject}/>
        })} </ul>
)
}
export default Subjects;