import React from "react";

const PersonForm = ({addPhone,newName,handleNameChange,newPhone,handlePhoneChange}) => {

    return(
        <form onSubmit={addPhone}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;