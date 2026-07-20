import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className="card">
      <h1 id="username">{props.username}</h1>
      <h2 id="course">{props.course}</h2>
      <h3 id="age">{props.age}</h3>
    </div> 
  )
}

export default Card
