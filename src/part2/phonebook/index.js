import React, { useState, useEffect } from 'react';
import PhonebookItem from './components/PhonebookItem';
import PhonebookForm from './components/PhonebookForm';
import PhonebookFilter from './components/PhonebookFilter';

const Phonebook = () => {
  const [ people, setPeople] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const [ showNameMessage, setShowNameMessage ] = useState(false);
  const [ showNumberMessage, setShowNumberMessage ] = useState(false);
  const [newSearch, setNewSearch] = useState('');
  const [filteredPeople, setFilteredPeople] = useState(people)
  const [notFoundError, setNotFoundError] = useState(false);

  const handleInputName = (e)=>{
    const inputName = e.target.value;
    setNewName(inputName);
    setShowNameMessage(false);
    setNewSearch('');
  }
  const handleInputNumber = (e)=>{
    const inputNumber = e.target.value;
    setNewNumber(inputNumber);
    setShowNumberMessage(false);
    setNewSearch('');
  }

  const handleInputSearch=(e)=>{
    const inputSearch = e.target.value;
    setNewSearch(inputSearch);
  }

  const addNewContact = (e)=>{
    e.preventDefault();
    const newPerson = {name: newName, number:newNumber};
    const personCopy = [...people];
    const checkIfNameExists = personCopy.find(function(person){ return person.name === newPerson.name }) !== undefined;
    const checkIfNumberExists = personCopy.find(function(person){ return person.number === newPerson.number }) !== undefined;

    if(!checkIfNameExists && !checkIfNumberExists){
        personCopy.push(newPerson);
        setPeople(personCopy);
        setFilteredPeople(personCopy);
    } else if(checkIfNameExists && checkIfNumberExists){
        setShowNameMessage(true);
        setShowNumberMessage(true);
    }else if(checkIfNameExists){
        setShowNameMessage(true);
    } else if(checkIfNumberExists){
        setShowNumberMessage(true);
    }
  }
  useEffect (()=>{
    const newPeopleArray = people.filter((person, id)=>{
      if((person.name && person.name.toUpperCase().includes(newSearch.toUpperCase())) || (person.number && person.number.toUpperCase().includes(newSearch.toUpperCase()))){
        if(notFoundError == true){
          setNotFoundError(false);
        }
        return person;
      } 
    })
    if(newPeopleArray.length === 0){
      setNotFoundError(true);
    }
    setFilteredPeople(newPeopleArray);
  }, [newSearch])
  return (
    <div>
      <h2>Phonebook</h2>
      <PhonebookFilter 
      handleInputSearch={handleInputSearch} 
      newSearch={newSearch}
      notFoundError={notFoundError}/>
      <PhonebookForm 
      addNewContact={addNewContact} 
      handleInputName={handleInputName} 
      showNameMessage={showNameMessage} 
      newName={newName} 
      handleInputNumber={handleInputNumber} 
      showNumberMessage={showNumberMessage} 
      newNumber={newNumber}/>
      <h2>Numbers</h2>
      <ul>
        {filteredPeople.length >0 &&(filteredPeople.map((person, id)=>{
          const newKey = id;
          return <PhonebookItem 
          key={newKey} 
          person={person}/>
        }))}
      </ul>
    </div>
  )
}

export default Phonebook