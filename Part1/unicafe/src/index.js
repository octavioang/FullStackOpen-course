import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => <h1>{text}</h1>
const Button = ({handleClick,name}) => <button onClick={handleClick}>{name}</button>

const Data = ({text, value}) => {
  if(text === "positive"){

    return (
      <tr><td>{text}</td><td>{value} %</td></tr>
    )

  }else{

    return (
      <tr><td>{text}</td><td>{value}</td></tr>
    )
  }
}
// un lugar adecuado para definir un componente
const Statistics = ({good,neutral,bad}) => {
  if (good + neutral + bad === 0) {

    return (
      <div>
          No feedback given
      </div>
    )
  } else {

    return (
      <div>
        <table>
          <tbody>
            <Data text="good" value={good}/>
            <Data text="neutral" value={neutral}/>
            <Data text="bad" value={bad}/>
            <Data text="all" value={good + neutral + bad}/>
            <Data text="average" value={(good + bad * -1)/(good + bad + neutral)}/>
            <Data text="positive" value={(good/(good + bad + neutral))*100}/>
          </tbody>
        </table>
      </div>
    )

  }

}



const App = () => {
  const feedback = "Give feedback"
  const stats = "Statistics"
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text={feedback}/>
      <Button handleClick={() =>setGood(good +1)} name="good"/>
      <Button handleClick={() =>setNeutral(neutral +1)} name="neutral"/>
      <Button handleClick={() =>setBad(bad +1)} name="bad"/>
      <Title text={stats}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)