import React from "react";
import "../stylesheets/Game.css";
import players from "../javascripts/players";


function Game() {

  const [gameState, setGameState] = React.useState(players)

  const handleBetChange = (e) => {
    console.log(e.target.value)
  }
  
  const handleLostChange = (e) => {
    console.log(e.target.value)
  }



  return (
    <div className="main-container">
      <h1>Game</h1>
      <form>
        {players.map((p) => {
          return (
            <div className="player-display-container">
              <h2>{p.name}</h2>
              <label>Apuesta</label>
              <input onChange={handleBetChange}/>
              <label>Pierde</label>
              <input onChange={handleLostChange}/>
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
