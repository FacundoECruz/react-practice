import "./App.css";
import React from "react";
import GameProvider from "./game/GameProvider";
import Game from "./components/Game"

function App() {

  return (
    <>
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
}

export default App;
