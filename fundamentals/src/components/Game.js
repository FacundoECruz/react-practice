import React from "react";
import "../stylesheets/Game.css";
import players from "../javascripts/players";

function gameStateReducer(state, action) {
  switch (action.manage) {
    case "bet": {
      const player = state.game[action.player];
      player.bet = action.bet;
      return { ...state, ...player };
    }
    case "lost": {
      const player = state.game[action.player];
      player.betsLost = action.betsLost;
      return { ...state, ...player };
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

  const handleBetChange = (e) => {
    setGameState({ manage: "bet", player: e.target.id, bet: e.target.value });
    console.log(gameState)
  };

  const handleLostChange = (e) => {
    setGameState({
      manage: "lost",
      player: e.target.id,
      betsLost: e.target.value,
    });
    console.log(gameState)
  };

  return (
    <div className="main-container">
      <h1>Game</h1>
      <form>
        {players.map((p) => {
          return (
            <div className="player-display-container">
              <h2>{p.name}</h2>
              <label htmlFor={p.key}>Apuesta</label>
              <input id={p.key} value={p.bet} onChange={handleBetChange} />
              <label htmlFor={p.key}>Pierde</label>
              <input id={p.key} value={p.betsLost} onChange={handleLostChange} />
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
