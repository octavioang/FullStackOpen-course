import React, { useState,useEffect } from 'react'
import ShowCountrie from './components/ShowCountries'
import axios from 'axios'
import './App.css';

const App = () => {
  const [searchCountrie, setSearchCountrie] = useState('')
  const [countries, setCountries] = useState([])
  

  const hook = () => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])
  
  const handleCountriesChange = (event) => {
    console.log(event.target.value)
    setSearchCountrie(event.target.value)
  }

  const showCountrie = (!searchCountrie) ? countries: countries.filter(country => country.name.toLocaleLowerCase().includes(searchCountrie.toLocaleLowerCase()))
  return (
    <div>
      Find countries <input value={searchCountrie} onChange={handleCountriesChange}></input>
      <ShowCountrie countries={showCountrie} />
    </div>
  );
}

export default App;
