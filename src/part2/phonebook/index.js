import React, { useState } from 'react'

const Phonebook = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const handleInputName = (e)=>{
    const inputName = e.target.value;
    setNewName(inputName);
  }
  const addNewName = (e)=>{
    e.preventDefault();
    const newPerson = {name: newName};
    const personCopy = [...persons];
    personCopy.push(newPerson)
    setPersons(personCopy);
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
    </div>
  )
}

export default Phonebook