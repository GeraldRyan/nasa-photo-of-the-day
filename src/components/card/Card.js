import React from 'react'
import './Card.css'
import { Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'
import { Card as C } from 'reactstrap'

const Card = (props) =>
{
  console.log("THESE ARE MY PROPS")

  // console.log(props.data)
  return (
    <div class='card'>

      {console.log('FROM INSIDE THE RETURN')}
      {console.log(props.data)}
      {console.log(props.data.data)}
      <C>
        <CardHeader>      <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="" />
       NASA Picture of the Day  <span>-></span>
        </CardHeader>
        <CardBody>
          <CardTitle>{props.data.title}</CardTitle>
          <CardText>{props.data.explanation}</CardText>
          <div className="image-box">
            <img class='main-img' src={props.data.url} />
          </div>
        </CardBody>
        <a href="https://www.nasa.gov/careers"><Button>Apply Today</Button></a>
        <CardFooter>{props.data.date}  {props.data.copyright}</CardFooter>
      </C>
    </div>
  )
}

export default Card