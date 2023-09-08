import React from 'react'
import "./App.css"// need to import css 
import Card from "./Components/Card"
const App = () => {
  console.clear();
  console.log("App is running");
  return (
    <div style={{position: 'center'}}>
    <div className="learn">
     <p> The world is small</p>   
     <p>Check this is working or not </p>
    </div>
      <br></br>
    <div>
      <Card name = "Abdul"/>
    </div>
    </div>
  )
}

export default App;