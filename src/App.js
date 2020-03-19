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
  const [data, setData] = useState('cherries');

    useEffect(() =>
    {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=1KP7HFMm9RGHkhwkvYPFImgat3hNyWdt9cVkDdQa`)
        .then( response =>
        {
          setData(response.data)
          console.log(`this is my RESPONSE, called DATA ${data}`)
          console.log(data)
          console.log(response)


        })
        .catch(console.log("Hello Dolly")
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
