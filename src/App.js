import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
// import SearchBear from './components/SearchBar/SearchBarContainer' // name change ok bc default
import Card from './components/card/Card.js'
import dummyData from './dummy-data'


// axios.get(`https://api.nasa.gov/planetary/apod?api_key=1KP7HFMm9RGHkhwkvYPFImgat3hNyWdt9cVkDdQa`)
//   .then(response=>
//   {
    
//     console.log("Hello Demo")
//     console.log(response)

//     // document.getElementById('root').appendChild(davey)
//   })
//   .catch(
//     console.log("Hello Planet")
//   )
// My New API Key: 1KP7HFMm9RGHkhwkvYPFImgat3hNyWdt9cVkDdQa


function App()
{
  const [data, setData] = useState({});

    useEffect(() =>
    {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=1KP7HFMm9RGHkhwkvYPFImgat3hNyWdt9cVkDdQa`)
        .then( response =>
        {
          setData(response.data)  // this is set as empty object first time around. You get a one layer pass when peeking inside it. If you look too deep, undefined.property makes crash. So prevent first call when object set to {}  
        })
        .catch(console.log("You caught me")
        )
    }, [])

    return (
      <div className="App">
            {/* <Card explanation={data.explanation} src={data.url} alt={data.title} /> */}
            <Card data={data} />
            
      </div>
    );

    // return (
    //   <div className="App">

    //     {
    //       data.map(element => (
    //         <Card explanation={element.data.explanation} src={element.data.url} alt={element.data.title} />
    //       ))
    //     }
    //   </div>
    // );
}

export default App;


