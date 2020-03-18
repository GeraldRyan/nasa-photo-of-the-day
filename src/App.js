import React from "react";
import "./App.css";
import axios from 'axios'
import SearchBear from './components/SearchBar/SearchBarContainer' // name change ok bc default
import Card from './components/card/Card'

axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)  //-- Nasa API - need api_key
  .then(function (response)
  {

    console.log("Hello Demo")
    console.log(response)
    const davey = x(response)
    document.getElementById('root').appendChild(davey)
  })
  .catch(
    console.log("Hello Planet")
  )

// Make a component but have to refactor to be along the lines of JSX for React
const x = (obj) =>
{

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
      {/*
      Notes => React Components (capitalized tags) get rendered if they are imported eponymously. 
      They compile into React.createElement(), which is why the react library must be in scope from JSX code. For example <SearchBear /> compiles into React.createELement(SearchBear), corresponding toa a component defined or imported 
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      {/* <SearchBear /> */}
      <Card />

    </div>
  );
}

export default App;
