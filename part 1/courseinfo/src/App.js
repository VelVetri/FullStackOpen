import React from 'react'


const Header = (Props) => {


  return (
    <h1>{Props.course}</h1>
  )
}

const Content = (Props) => {

  
  return (
    <div>
    <Part content={Props.content1} exercises = {Props.exercises1}/>
    <Part content={Props.content2} exercises = {Props.exercises2}/>
    <Part content={Props.content3} exercises = {Props.exercises3}/>
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
  const part1='Fundamentals of React';
  const part2='Using Props to pass data';
  const part3='State of a component';
  const exercises1=10;
  const exercises2=7;
  const exercises3=14;
    

  return(

    <div>    
    <Header course={course} />
    <Content content1={part1} exercises1 = {exercises1} content2={part2} exercises2 = {exercises2} content3={part3} exercises3= {exercises3}/>
    <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>

  )
}


export default App;
