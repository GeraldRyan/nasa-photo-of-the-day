import React, { useState } from 'react'
import './Card.css'

const Card = (props) =>
{

  return (
    <div>
      <div>Science is Cool</div>
      <div>{props.explanation}</div>
    </div>
  )
}

export default Card