import React from 'react'


const Header = (Props) => {


  return (
    <h1>{Props.course}</h1>
  )
}

const Content = (Props) => {

  
  return (
    <p>{Props.content +' '+ Props.exercises}</p>
  )
}

const Total = (Props) => {

  
  return (
    <p>Number of exercises {Props.total}</p>
  )
}

const App = () => {

  const course='Half Stack App Development';
  const part1='Fundamentals of React';
  const part2='Using Props to pass data';
  const part3='State of a component';
  const exercises1=10;
  const exercises2=7;
  const exercises3=14;
    

  return(

    <div>    
    <Header course={course} />
    <Content content={part1} exercises = {exercises1}  />
    <Content content={part2} exercises = {exercises2}   />
    <Content content={part3} exercises = {exercises3}   />
    <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>

  )
}


export default App;
