import React, { useState } from 'react'
import './Card.css'

const Card = (props) =>
{

  return (
    <div class='card'>
      <div>Science is Cool</div>
      <div>{props.explanation}</div>
      <img src={props.src} alt={props.alt}/>
    </div>
  )
}

export default Card