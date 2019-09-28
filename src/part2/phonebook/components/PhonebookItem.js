import React from 'react';

const PhonebookItem = (props) => {
return (
    <li>
        {props.person.name} - {props.person.number ? props.person.number : "No number provided"}
    </li>
)
}

export default PhonebookItem;