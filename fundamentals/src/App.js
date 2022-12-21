import React from "react";
import "./App.css";

function Input({ name, onNameChange, handleSubmit }) {
  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name" onChange={onNameChange}></input>
        <div className="input-button">
          <button type="submit">Add Name</button>
        </div>
      </form>
    </div>
  );
}

function Display({ list }) {
  console.log(list)
}

function App() {
  const [name, setName] = React.useState("");
  const [display, setDisplay] = React.useState(Array);

  return (
    <div className="App">
      <h1>React Practice</h1>
      <Input
        name={name}
        onNameChange={(event) => setName(event.target.value)}
        handleSubmit={(event) => {
          event.preventDefault()
          setDisplay(event.target.name.value)}}
      />
      <Display name={name} list={display} />
    </div>
  );
}

export default App;
