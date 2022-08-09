import React, { useState,useEffect } from 'react'
import './index.css'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [ newNameFilter, setNewNameFilter ] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  const hook = () => {
    personService
    .getAll()
    .then(initialNotes => {
      setPersons(initialNotes)
    })
  }

  useEffect(hook, [])

  

  const addPhone = (event) => {
    event.preventDefault()
    const found = persons.find(element => element.name.toLowerCase() === newName.toLowerCase());
    const phoneObject = {
      name: newName,
      number:newPhone,
    }
    
    if (found === undefined){
      personService.create(phoneObject).then(newItem => {setPersons(persons.concat(newItem))})
        setErrorMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      
      setNewName('')
      setNewPhone('')
    } else{
      if (window.confirm(newName + " is already added to phonebook, replace the old number with a new one?")){ //" is already added to phonebook"
        personService.update(found.id,phoneObject).then(returnedPerson => {
          setPersons(persons.map(person => person.id !== found.id ? person : returnedPerson))
          setErrorMessage(
            `${newName} was update`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }).catch(error => {
            console.log('fail')
            setErrorMessage(
              `[ERROR] ${newName} was already deleted from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      } 
      setNewName('')
      setNewPhone('')
    }

  }

  const deletePerson = id => {

    const filteredPerson = persons.filter(person => person.id === id)
    console.log(filteredPerson)
    const personName = filteredPerson[0].name
    const personId = filteredPerson[0].id
    if (window.confirm(`Delete ${personName} ?`)) {
      
      personService.remove(personId).then(setPersons(persons.filter(person => person.id !== personId))
     )}
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
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter newNameFilter={newNameFilter} handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm addPhone={addPhone} newName={newName} handleNameChange ={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
      <h3>Numbers</h3>
      <Persons persons={personToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App
