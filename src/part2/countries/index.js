import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesFilter from './components/CountriesFilter';

const Countries = () => {
  const [ filterName, setFilterName] = useState(''); 
  const [ countries, setCountries ] = useState([]);
  const [ tooManyResults, setTooManyResults ] = useState(false);
  const [ countriesList, setCountriesList ] = useState([]);
  const [ onlyCountry, setOnlyCountry ] = useState({});
  // const [newSearch, setNewSearch] = useState('');
  // const [filteredPeople, setFilteredPeople] = useState(people)
  // const [notFoundError, setNotFoundError] = useState(false);

  // const handleInputName = (e)=>{
  //   const inputName = e.target.value;
  //   setNewName(inputName);
  //   setShowNameMessage(false);
  //   setNewSearch('');
  // }
  // const handleInputNumber = (e)=>{
  //   const inputNumber = e.target.value;
  //   setNewNumber(inputNumber);
  //   setShowNumberMessage(false);
  //   setNewSearch('');
  // }

  const handleInputSearch=(e)=>{
    const inputSearch = e.target.value;
    setFilterName(inputSearch);
  }

  // const addNewContact = (e)=>{
  //   e.preventDefault();
  //   const newPerson = {name: newName, number:newNumber};
  //   const personCopy = [...people];
  //   const checkIfNameExists = personCopy.find(function(person){ return person.name === newPerson.name }) !== undefined;
  //   const checkIfNumberExists = personCopy.find(function(person){ return person.number === newPerson.number }) !== undefined;

  //   if(!checkIfNameExists && !checkIfNumberExists){
  //       personCopy.push(newPerson);
  //       setPeople(personCopy);
  //       setFilteredPeople(personCopy);
  //   } else if(checkIfNameExists && checkIfNumberExists){
  //       setShowNameMessage(true);
  //       setShowNumberMessage(true);
  //   }else if(checkIfNameExists){
  //       setShowNameMessage(true);
  //   } else if(checkIfNumberExists){
  //       setShowNumberMessage(true);
  //   }
  // }

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${filterName}`)
      .then(response => {
        console.log('promise fulfilled', response);
        setCountries(response.data);
        // setFilteredPeople(response.data);
      })
  }, [filterName])

  useEffect (()=>{
    if(countries.length > 10){
      setCountriesList([]);
      setOnlyCountry({});
      setTooManyResults(true);
    } else if(countries.length === 1 ){
      const onlyCountryObject = {
        name: countries[0].name,
        capital: countries[0].capital,
        population: countries[0].population,
        languages: countries[0].languages,
        flag: countries[0].flag
      };
      setCountriesList([]);
      setTooManyResults(false);
      setOnlyCountry(onlyCountryObject);
    } else {
      const countriesSimpleList = countries.map(country=>{
        const countrySimpleObject = {
          name: country.name,
          id: country.numericCode
        }
        return countrySimpleObject
      })
      setOnlyCountry({});
      setCountriesList(countriesSimpleList);
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
        <div>
          <h3>{onlyCountry.name}</h3>
          <p>Capital: {onlyCountry.capital}</p>
          <p>Population: {onlyCountry.population}</p>
          <h4>Languages</h4>
          <ul>
            {onlyCountry.languages.map((language, id) =>{
              const keyId= id;
              return (<li key={keyId}>
                <p>{language.name}</p>
              </li>)
            })}
          </ul>
          <img src={onlyCountry.flag} alt={`${onlyCountry.name}'s flag`}/>
        </div>
      )}
    
      {/* <CountriesForm 
      addNewContact={addNewContact} 
      handleInputName={handleInputName} 
      showNameMessage={showNameMessage} 
      newName={newName} 
      handleInputNumber={handleInputNumber} 
      showNumberMessage={showNumberMessage} 
      newNumber={newNumber}/> */}
      <h2>Countries</h2>
      <ul>
        {countriesList.length >0 &&(countriesList.map((country, id)=>{
          const newKey = id;
          return <li key={newKey} id={country.id}><p>{country.name}</p> </li>
          // return <CountriesItem 
          // key={newKey} 
          // person={person}/>
        }))}
      </ul>
    </div>
  )
}

export default Countries