import "./App.css";
import React from "react";
import PlayerContext from "./context/PlayerContext";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  const playerData = {
    name: 'Messi',
    bid: 2,
    win: true,
    bidsLost: 0,
  };
  return (
    <PlayerContext.Provider value={playerData}>
      <div className="App">
        <h1>Use context exercise</h1>
        <PlayerInfo />
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
