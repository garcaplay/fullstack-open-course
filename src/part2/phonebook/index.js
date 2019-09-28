import React, { useState } from 'react'

const Phonebook = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ showMessage, setShowMessage ] = useState(false);
  const handleInputName = (e)=>{
    const inputName = e.target.value;
    setNewName(inputName);
    setShowMessage(false);
  }
  const addNewName = (e)=>{
    e.preventDefault();
    const newPerson = {name: newName};
    const personCopy = [...persons];
    const checkIfExists = personCopy.find(function(person){ return person.name === newPerson.name }) !== undefined;
    if(!checkIfExists){
        personCopy.push(newPerson);
        setPersons(personCopy);
    } else {
        setShowMessage(true);
    }
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(e)=>addNewName(e)}> 
        <div>
          name: <input onChange={(e)=>handleInputName(e)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {showMessage ?
      <p style={{color:"red"}}>{newName} is already added to phonebook</p> : ""}
    </div>
  )
}

export default Phonebook