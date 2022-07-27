import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({name}) => <h1>{name}</h1>
const Button = ({handleClick,name}) => <button onClick={handleClick}>{name}</button>
const Counter = ({number}) => {

  return (
    <p>has {number} votes</p>
  )
}

const Max = ({points,anecdotes}) => {

  const maxPoint = Math.max(...points)
  const position = points.indexOf(maxPoint)
  const AnecdoteWithMaxPoints = anecdotes[position]

  if (maxPoint === 0){

    return(
      <p>no anecdotes have any votes right now</p>
    )
  }

  return(
    <div>
      <p>{AnecdoteWithMaxPoints}</p>
      <p>has {maxPoint} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  // const number = Math.floor(Math.random() * anecdotes.length)

  const handleVoteClick = () => {

    const copy = [...votes]
    // increment the value in position 2 by one
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Title name="Anecdote of the day"/>
      {props.anecdotes[selected]}
      <Counter number={votes[selected]}/>
      <Button handleClick={handleVoteClick} name="Vote"/>
      <Button handleClick={() =>setSelected(Math.floor(Math.random() * anecdotes.length))} name="next anecdotes"/>
      <Title name="Anecdote with most votes"/>
      <Max points={votes} anecdotes={props.anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)