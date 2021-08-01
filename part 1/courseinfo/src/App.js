import React from 'react'


const Header = (Props) => {


  return (
    <h1>{Props.course}</h1>
  )
}

const Content = (Props) => {

  return (
    <div>
    <Part content={Props.parts[0].name} exercises = {Props.parts[0].exercises}/>
    <Part content={Props.parts[1].name} exercises = {Props.parts[1].exercises}/>
    <Part content={Props.parts[2].name} exercises = {Props.parts[2].exercises}/>
    </div>
  )
}

const Total = (Props) => {
  
  return (
    <p>Number of exercises {Props.parts[0].exercises + Props.parts[1].exercises + Props.parts[2].exercises}</p>
  )
}

const Part = (Props) => {

  return (
  <p>{Props.content}   {Props.exercises}</p>
    
    
    )
}

const App = () => {

  const course='Half Stack App Development';
  const parts=[{
    name: 'Fundamentals of React',
    exercises:10
  },
  {
    name: 'Using Props to pass data',
    exercises:7
  },
  {
    name: 'State of a component', 
    exercises:14
  }];

  return(

    <div>    
    <Header course={course} />
    <Content parts={parts}/>
    <Total parts={parts}/>
    </div>

  )
}


export default App;
