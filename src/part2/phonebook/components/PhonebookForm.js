
import React from 'react';

const PhonebookForm = (props) => {
    return (
        <form onSubmit={(e)=>props.addNewContact(e)}> 
            <div>
                <h3>Add a new contact</h3>
                <label> name: <input onChange={(e)=>props.handleInputName(e)}/></label>
            </div>
            {props.showNameMessage ?
                <p style={{color:"red"}}>{props.newName} is already added to phonebook</p> : ""
            }
            <div>
                <label>number: <input onChange={(e)=>props.handleInputNumber(e)}/></label>
            </div>
            {props.showNumberMessage ?
                <p style={{color:"red"}}>{props.newNumber} is already assigned to a contact</p> : ""
            }
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PhonebookForm;

