import React, { useState} from 'react'
import Show from './Show'

 const ShowCountrie = ({countries}) =>{
  const [country, setCountry] = useState({})
     
    if (countries.length>11){
      return(
        <div>
          <p>Too many matches, specify another filter</p>
        </div>
      )
    } else if (countries.length>1 && countries.length<11) {
      return (
        <div>
          {countries.map(country => {
          return(
          <div key={country.name}>
          <p>{country.name}  <button onClick={() => setCountry(country)}>show</button></p>
          </div>
          );
          })}
          <Show showClickContry={country}/>
        
        </div>
      )

    }else if (countries.length===1){
      return(
        
        <div>
         <Show showClickContry={countries[0]}/>
        </div>
      )
    }else{
      return(
        <div></div>
      )
    }
    
  }

  export default ShowCountrie