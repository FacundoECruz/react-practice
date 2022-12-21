import React from "react";
import "./App.css";

function Board() {
  function renderButton(i) {
    return <button>Boton</button>;
  }

  return (
    <div>
      <div className="board-row">
        {renderButton(0)}
        {renderButton(1)}
        {renderButton(2)}
      </div>
      <div className="board-row">
        {renderButton(0)}
        {renderButton(1)}
        {renderButton(2)}
      </div>
      <div className="board-row">
        {renderButton(0)}
        {renderButton(1)}
        {renderButton(2)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Button History</h1>
      <Board />
    </div>
  );
}

export default App;
