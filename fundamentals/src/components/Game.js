import React from "react";
import "../stylesheets/Game.css";
import players from "../javascripts/players";


function Game() {
  return (
    <div className="main-container">
      <h1>Game</h1>
      <form>
        {players.map((p) => {
          return (
            <div>
              <h2>{p.name}</h2>
              <label>Apuesta</label>
              <input />
              <label>Pierde</label>
              <input />
            </div>
          );
        })}
      </form>
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
