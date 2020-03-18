import React from "react";
import "./App.css";
import axios from 'axios'

axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)  //-- Nasa API
  .then(function (response) {
    
    console.log("Hello Demo")
    console.log(response)
    const davey = x(response)
    document.getElementById('root').appendChild(davey)
    })
    .catch(
      console.log("Hello Planet")
    )

const x = (obj) => {

  const davey = document.createElement('div')
  const image = document.createElement('img')
  image.setAttribute('src', obj.data.url)
  davey.appendChild(image)
  return davey
}


function App()
{
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
