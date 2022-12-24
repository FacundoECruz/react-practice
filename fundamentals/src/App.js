import React from "react";
import "./App.css";

function CheckIn(intialValue = "") {
  const [name, setName] = React.useState(intialValue);

  function handleChange(event) {
    setName(event.target.value)
  }
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} id="name" onChange={handleChange}/>
      </form>
      {name ? <p>Hola {name}</p> : 'Enter your name here'}
    </div>
  )
}

function App() {
  return <CheckIn intialValue="Anastasia"/>;
}

export default App;
