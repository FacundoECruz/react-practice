import "./App.css";
import List from './components/List'

function Input() {
  return (
    <div className="input-form">
      <form>
        <label htmlFor="name">Name: </label>
        <input id="name"></input>
        <div className="input-button">
            <button>Add Name</button>
        </div>
      </form>
    </div>
  );
}

function App() {
  return <div className="App">
    <h1>React Practice</h1>
    <Input />
    <List />
  </div>;
}

export default App;
