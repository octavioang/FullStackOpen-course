import React from 'react'

const Header = ({title}) => {return <h2>{title.name}</h2>}

const Total = ({vector}) => {

  const initialValue = 0;
  const sumWithInitial = vector.reduce( 
    (previousValue, currentValue) => previousValue + currentValue,initialValue);

  return(
    <div>
      <p><b>Total of {sumWithInitial} exercises</b></p>
    </div>
  )
}

const Part = (props) => {
  return (
      <p>
          {props.part.name} {props.part.exercises}
          
          
      </p>
  )
}

const Content = ({content}) => {

  return (
    <div>
      {content.parts.map((part) => <Part part={part} />)}
    </div>
  )
}

const Course = ({ course }) => {
  return (
      <div>
        <Header title={course}/>
        <Content content={course}/>
        <Total vector={course.parts.map(p => p.exercises)} />
      </div>
  )
}
export default Course