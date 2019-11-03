
import React from 'react';

const CountriesFilter = (props) => {
return (
    <div>
        <h3>Search countries</h3>
        <label> Search: 
            <input value={props.filterName} onChange={(e)=>props.handleInputSearch(e)}/>
        </label>
        {props.tooManyResults &&( <p style={{color:"red"}}>Too many results, please specify another filter</p>)}
   </div>
)
}

export default CountriesFilter;
