import React from 'react'
import './Card.css'

const Card = (props) =>
{
console.log("THESE ARE MY PROPS")
console.log(props.data)
  return (
    <div class='card'>
      {console.log('FROM INSIDE THE RETURN')}
      {console.log(props.data)}
      {console.log(props.data.data)}
 

      <div>{props.data.explanation}</div>
      <img src={props.data.url}/>
    </div>
  )
}

export default Card