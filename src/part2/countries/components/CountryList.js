
import React, {Fragment} from 'react';
import CountryListItem from './CountryListItem';

const CountryList = (props) => {
    return (
        <Fragment>
            <h2>Countries</h2>
            <ul>
                {props.countriesList.length >0 &&(props.countriesList.map((country, id)=>{
                    const newKey = id;
                    return <CountryListItem country={country} handleShowCountryCard={props.handleShowCountryCard} key={newKey}/>
                }))}
            </ul>
        </Fragment>
    )
}

export default CountryList;
