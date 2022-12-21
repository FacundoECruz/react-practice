import React from "react";
import "./App.css";

function Input({ handleSubmit }) {
  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name"></input>
        <div className="input-button">
          <button type="submit">Add Name</button>
        </div>
      </form>
    </div>
  );
}

function Display({ name }) {
  
  return (
    <h1>{name}</h1>
  );
}

function App() {
  const [name, setName] = React.useState("");
  const [display, setDisplay] = React.useState("");

  return (
    <div className="App">
      <h1>React Practice</h1>
      <Input
        name={name}
        handleSubmit={(event) => {
          event.preventDefault();
          setDisplay(event.target.name.value);
        }}
      />
      <Display name={display} />
    </div>
  );
}

export default App;
