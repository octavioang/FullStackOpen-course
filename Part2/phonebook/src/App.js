import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [ newNameFilter, setNewNameFilter ] = useState('')

  

  const addPhone = (event) => {
    event.preventDefault()
    const found = persons.find(element => element.name.toLowerCase() === newName.toLowerCase());
    const phoneObject = {
      name: newName,
      number:newPhone,
    }
    
    if (found === undefined){
      setPersons(persons.concat(phoneObject))
      setNewName('')
      setNewPhone('')
    } else{
      window.alert(newName + " is already added to phonebook"); //" is already added to phonebook"
      setNewName('')
      setNewPhone('')
    }

  }


  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
  
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewNameFilter(event.target.value)
  }

  const personToShow = (!newNameFilter) ? persons: persons.filter(person => person.name.toLocaleLowerCase().includes(newNameFilter.toLocaleLowerCase()))
  console.log(!newNameFilter)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newNameFilter={newNameFilter} handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm addPhone={addPhone} newName={newName} handleNameChange ={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
      <h3>Numbers</h3>
      <Persons persons={personToShow}/>
    </div>
  )
}

export default App
