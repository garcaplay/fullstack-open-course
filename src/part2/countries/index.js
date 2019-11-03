import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import CountriesFilter from './components/CountriesFilter';
import CountryCard from './components/CountryCard';
import CountryList from './components/CountryList';

const Countries = () => {
  const [ filterName, setFilterName] = useState(''); 
  const [ countries, setCountries ] = useState([]);
  const [ tooManyResults, setTooManyResults ] = useState(false);
  const [ countriesList, setCountriesList ] = useState([]);
  const [ onlyCountry, setOnlyCountry ] = useState({});
  const [showCountryCard, setShowCountryCard] = useState(false);

  const handleInputSearch=(e)=>{
    const inputSearch = e.target.value;
    if(inputSearch === ""){
      setTooManyResults(false);
    }
    setFilterName(inputSearch);
  }

  const handleShowCountryCard= (e)=>{
    e.preventDefault();
    const selectedCountry = countriesList.filter(country=>{
      return country.id === e.target.id;
    })
    setOnlyCountry(selectedCountry[0]);
    setShowCountryCard(true);
  }

  useEffect(() => {
    if(filterName!==""){
      axios
      .get(`https://restcountries.eu/rest/v2/name/${filterName}`)
      .then(response => {
        setCountries(response.data);
      })
    }
  }, [filterName])

  useEffect (()=>{
    if(countries.length > 10){
      setCountriesList([]);
      setOnlyCountry({});
      setShowCountryCard(false);
      setTooManyResults(true);
    } else if(countries.length === 1 ){
      const onlyCountryObject = {
        name: countries[0].name,
        id: countries[0].numericCode,
        capital: countries[0].capital,
        population: countries[0].population,
        languages: countries[0].languages,
        flag: countries[0].flag
      };
      setCountriesList([]);
      setTooManyResults(false);
      setShowCountryCard(true);
      setOnlyCountry(onlyCountryObject);
    } else {
      const countriesSimpleList = countries.map(country=>{
        const countrySimpleObject = {
          name: country.name,
          id: country.numericCode,
          capital: country.capital,
          population: country.population,
          languages: country.languages,
          flag: country.flag
        }
        return countrySimpleObject
      })
      setOnlyCountry({});
      setCountriesList(countriesSimpleList);
      setShowCountryCard(false);
      setTooManyResults(false);
    }
  }, [countries])
  return (
    <div>
      <h2>Countries</h2>
      <CountriesFilter 
      handleInputSearch={handleInputSearch}
      filterName={filterName}
      tooManyResults={tooManyResults}/>
      {Object.entries(onlyCountry).length > 0 && (
        <CountryCard selectedCountry={onlyCountry}/>
      )}
      {!showCountryCard && (
        <Fragment>
         <CountryList handleShowCountryCard={handleShowCountryCard} countriesList={countriesList}/>
        </Fragment>
      )}
    </div>
  )
}

export default Countries