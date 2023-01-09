import React from "react";
import "../stylesheets/Game.css";
import players from "../javascripts/players";

function gameStateReducer(state, action) {}

function Game() {

  const [gameState, setGameState] = React.useReducer(gameStateReducer, {
    name: players.name,
    bid: 0,
    win: false,
    bidsLost: 0,
  });
  return (
    <div className="main-container">
      <h1>Game</h1>
    </div>
  );
}

export default Game;

// PlayersRound = [{
//   name:	"Facu",
//   bid: 2,
//   win:	true,
//   bidsLost: 0
// },
// {
// name:	"Facu",
//   bid: 2,
//   win:	true,
//   bidsLost: 0
// }]

//SE SUPONE QUE AL BACKEND LE TENGO QUE MANDAR UN ARRAY DE PlayerRound
