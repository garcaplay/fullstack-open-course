
import React from 'react';

const CountryCard = (props) => {
return (
    <div>
        <h3>{props.selectedCountry.name}</h3>
        <p>Capital: {props.selectedCountry.capital}</p>
        <p>Population: {props.selectedCountry.population}</p>
        <h4>Languages</h4>
        <ul>
        {props.selectedCountry.languages.map((language, id) =>{
            const keyId= id;
            return (<li key={keyId}>
            <p>{language.name}</p>
            </li>)
        })}
        </ul>
        <img src={props.selectedCountry.flag} alt={`${props.selectedCountry.name}'s flag`}/>
    </div>
)
}

export default CountryCard;
