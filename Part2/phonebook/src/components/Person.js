import React from 'react'

const Person = ({ persons,deletePerson }) => {
  
  return (
  <div>       
    <ul>
  {persons.map(person => <li key={person.name}>{person.name} {person.number}  <button onClick={() => deletePerson(person.id)}>delete</button></li>)}
    </ul>
</div>
  
  )
}

export default Person