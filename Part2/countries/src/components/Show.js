import React, { useState,useEffect } from "react";
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const Show = ({showClickContry}) => {

    const [weather, setWeather] = useState([])

    useEffect(() => {
      axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${showClickContry.capital}`)
        .then(response => {
          setWeather(response.data)
        })
    })


    if (showClickContry.name === undefined){
      return(
        <div></div>
      )
    }else{

      return(
        <div key={showClickContry.name}>
            <h1>{showClickContry.name}</h1>
            <p></p>
            <p>capital {showClickContry.capital}</p>
            <p>population {showClickContry.population}</p>
            <p></p>
            <h2>languages</h2>
            <ul>
            {(showClickContry.languages).map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={showClickContry.flag} width="210" height="210"></img>
            <h2>Weather in {showClickContry.capital}</h2>
            <p>temperature: {weather.temperature}° Celcius</p>
            <img src={weather.weather_icons[0]} alt="Weather icon"></img>
            <p>wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
          </div>
      )
    }

  }

  export default Show