import React, { useState } from 'react';
import PhonebookItem from './components/PhonebookItem';

const Phonebook = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const [ showNameMessage, setShowNameMessage ] = useState(false);
  const [ showNumberMessage, setShowNumberMessage ] = useState(false);


  const handleInputName = (e)=>{
    const inputName = e.target.value;
    setNewName(inputName);
    setShowNameMessage(false);
  }
  const handleInputNumber = (e)=>{
    const inputNumber = e.target.value;
    setNewNumber(inputNumber);
    setShowNumberMessage(false);
  }
  const addNewName = (e)=>{
    e.preventDefault();
    const newPerson = {name: newName, number:newNumber};
    const personCopy = [...persons];
    const checkIfNameExists = personCopy.find(function(person){ return person.name === newPerson.name }) !== undefined;
    const checkIfNumberExists = personCopy.find(function(person){ return person.number === newPerson.number }) !== undefined;

    if(!checkIfNameExists && !checkIfNumberExists){
        personCopy.push(newPerson);
        setPersons(personCopy);
    } else if(checkIfNameExists && checkIfNumberExists){
        setShowNameMessage(true);
        setShowNumberMessage(true);
    }else if(checkIfNameExists){
        setShowNameMessage(true);
    } else if(checkIfNumberExists){
        setShowNumberMessage(true);
    }
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(e)=>addNewName(e)}> 
        <div>
          name: <input onChange={(e)=>handleInputName(e)}/>
        </div>
        {showNameMessage ?
      <p style={{color:"red"}}>{newName} is already added to phonebook</p> : ""}
        <div>
            number: <input onChange={(e)=>handleInputNumber(e)}/>
        </div>
        {showNumberMessage ?
      <p style={{color:"red"}}>{newNumber} is already assigned to a contact</p> : ""}

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
            <ul>
                {persons.map((person, id)=>{
                    const newKey = id;
                    return <PhonebookItem key={newKey} person={person}/>
                })}
            </ul>
    </div>
  )
}

export default Phonebook