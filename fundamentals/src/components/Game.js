import React from "react";
import "../stylesheets/Game.css";
import players from "../javascripts/players";

function gameStateReducer(state, action) {
  switch (action.manage) {
    case "bid": {
      const player = state.game[action.player];
      player.bid = action.bid;
      return { ...state, ...player };
    }
    case "lost": {
      const player = state.game[action.player];
      player.bidsLost = action.bidsLost;
      return { ...state, ...player };
    }
    case "win": {
      const player = state.game[action.player];
      player.win = true
      return {...state, ...player}      
    }
    default: {
      throw new Error(`Unsupported action ${action.manage}`);
    }
  }
}

function Game() {
  const [gameState, setGameState] = React.useReducer(gameStateReducer, {
    game: players,
  });

  const handleBidChange = (e) => {
    setGameState({ manage: "bid", player: e.target.id, bid: e.target.value });
  };

  const handleLostChange = (e) => {
    setGameState({
      manage: "lost",
      player: e.target.id,
      bidsLost: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault()
    const tablePlayersRound = gameState.game
    tablePlayersRound.forEach(p => {
      if(p.bidsLost === 0){
        return (setGameState({manage: "win", player: p.key}))
      }
    })
  }

  console.log(gameState.game) 

  return (
    <div className="main-container">
      <h1>Game</h1>
      <form onSubmit={handleSubmit}>
        {players.map((p) => {
          return (
            <div className="player-display-container">
              <h2>{p.name}</h2>
              <label htmlFor={p.key}>Apuesta</label>
              <input type='number' id={p.key} value={p.bid} onChange={handleBidChange} />
              <label htmlFor={p.key}>Pierde</label>
              <input
                type='number'
                id={p.key}
                value={p.bidsLost}
                onChange={handleLostChange}
              />
            </div>
          );
        })}
        <button type="submit">Siguiente Ronda</button>
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
