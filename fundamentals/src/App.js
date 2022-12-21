import React from 'react';
import "./App.css";

function Input() {
  
  const [input, setInput] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setInput(event.target[0].value)
  }

  return (
    <div className="input-form">
      <form>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" onChange={handleSubmit}></input>
        <div className="input-button">
            <button type="submit">Add Name</button>
        </div>
      </form>
      {input ? <strong>Name: {input}</strong> : 'Type the name here'}
    </div>
  );
}

// function List() {

//   const [list, setList] = React.useState(Array)

//   return(
//     <li></li>
//   )
// }

function App() {

  const onSubmitName = value => alert(`Name: ${value}`)

  return <div className="App">
    <h1>React Practice</h1>
    <Input onSubmitName={onSubmitName}/>
    {/* <List /> */}
  </div>;
}

export default App;
