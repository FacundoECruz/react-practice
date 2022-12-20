import "./App.css";

function Input() {

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = event.target.elements.name.value
  }

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" type='text'></input>
        <div className="input-button">
            <button type="submit">Add Name</button>
        </div>
      </form>
    </div>
  );
}

function List() {
  return(
    <li></li>
  )
}

function App() {
  return <div className="App">
    <h1>React Practice</h1>
    <Input />
    <List />
  </div>;
}

export default App;
