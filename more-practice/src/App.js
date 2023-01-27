import "./App.css";
import React from "react";
import PlayerContext from "./context/PlayerContext";
import Table from "./components/Table";

function App() {
  const playersTable = [
    {
      name: 'Facu',
      score: 24,
    },
    {
      name: 'Antone',
      score: 32,
    },
    {
      name: 'Brenda',
      score: 20,
    },
    {
      name: 'Gigi',
      score: 43,
    },
  ];
  return (
    <PlayerContext.Provider value={playersTable}>
      <div className="App">
        <h1>Use context exercise</h1>
        <Table />
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
