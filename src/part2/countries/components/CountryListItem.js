
import React from 'react';

const CountryListItem = (props) => {
    return (
        <li>
            <p>{props.country.name}</p>
            <button onClick={(e)=>props.handleShowCountryCard(e)} id={props.country.id}>View</button> 
        </li>
    )
}

export default CountryListItem;
