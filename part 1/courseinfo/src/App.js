import React from 'react'


const Header = (Props) => {


  return (
    <h1>{Props.course}</h1>
  )
}

const Content = (Props) => {

  
  return (
    <div>
    <Part content={Props.part1.name} exercises = {Props.part1.exercises}/>
    <Part content={Props.part2.name} exercises = {Props.part2.exercises}/>
    <Part content={Props.part3.name} exercises = {Props.part3.exercises}/>
    </div>
  )
}

const Total = (Props) => {

  
  return (
    <p>Number of exercises {Props.total}</p>
  )
}

const Part = (Props) => {

  return (
  <p>{Props.content}   {Props.exercises}</p>
    
    
    )
}

const App = () => {

  const course='Half Stack App Development';
  const part1={
    name: 'Fundamentals of React',
    exercises:10
  };
  const part2={
    name: 'Using Props to pass data',
    exercises:7
  };
  const part3={
    name: 'State of a component', 
    exercises:14
  };

  return(

    <div>    
    <Header course={course} />
    <Content part1={part1} part2={part2} part3={part3}/>
    <Total total = {part1.exercises +part2.exercises + part3.exercises}/>
    </div>

  )
}


export default App;
