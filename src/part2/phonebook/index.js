import React, { useState, useEffect } from 'react';
import PhonebookItem from './components/PhonebookItem';

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

  const addNewName = (e)=>{
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
      <div>
          <h3>Search contact</h3>
         <label> Search: <input value={newSearch} onChange={(e)=>handleInputSearch(e)}/></label>
        {notFoundError &&( <p style={{color:"red"}}>No contact matches</p>)}
        </div>
      <form onSubmit={(e)=>addNewName(e)}> 
        <div>
          <h3>Add a new contact</h3>
         <label> name: <input onChange={(e)=>handleInputName(e)}/></label>
        </div>
        {showNameMessage ?
      <p style={{color:"red"}}>{newName} is already added to phonebook</p> : ""}
        <div>
            <label>number: <input onChange={(e)=>handleInputNumber(e)}/></label>
        </div>
        {showNumberMessage ?
      <p style={{color:"red"}}>{newNumber} is already assigned to a contact</p> : ""}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPeople.length >0 &&(filteredPeople.map((person, id)=>{
            const newKey = id;
            return <PhonebookItem key={newKey} person={person}/>
          }))
        }
      </ul>
    </div>
  )
}

export default Phonebook