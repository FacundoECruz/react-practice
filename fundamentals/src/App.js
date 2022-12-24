import React from "react";
import "./App.css";

function CheckIn() {
  const [name, setName] = React.useState("");

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
  return <CheckIn />;
}

export default App;
