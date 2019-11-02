
import React from 'react';

const PhonebookFilter = (props) => {
return (
    <div>
        <h3>Search contact</h3>
        <label> Search: 
            <input value={props.newSearch} onChange={(e)=>props.handleInputSearch(e)}/>
        </label>
        {props.notFoundError &&( <p style={{color:"red"}}>No contact matches</p>)}
   </div>
)
}

export default PhonebookFilter;
