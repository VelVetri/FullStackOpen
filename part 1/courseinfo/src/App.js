import React from 'react'


const Header = (Props) => {


  return (
    <h1>{Props.course.name}</h1>
  )
}

const Content = (Props) => {

  return (
    <div>
    <Part content={Props.course.parts[0].name} exercises = {Props.course.parts[0].exercises}/>
    <Part content={Props.course.parts[1].name} exercises = {Props.course.parts[1].exercises}/>
    <Part content={Props.course.parts[2].name} exercises = {Props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (Props) => {
  
  return (
    <p>Number of exercises {Props.course.parts[0].exercises + Props.course.parts[1].exercises + Props.course.parts[2].exercises}</p>
  )
}

const Part = (Props) => {

  return (
  <p>{Props.content}   {Props.exercises}</p>
    
    
    )
}

const App = () => {


  const course = {
  name:'Half Stack App Development',
  parts:[
  {
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
  }]
  }
  return(

    <div>    
    <Header course={course} />
    <Content course={course}/>
    <Total course={course}/>
    </div>

  )
  
}


export default App;
