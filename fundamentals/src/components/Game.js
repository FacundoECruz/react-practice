/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "../stylesheets/Game.css";
import players from "../javascripts/players";
import dataFromBackend from "../javascripts/dataFromBackend";

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
      player.win = true;
      return { ...state, ...player };
    }
    default: {
      throw new Error(`Unsupported action ${action.manage}`);
    }
  }
}

function Game() {
  const [gameState, setGameState] = React.useReducer(gameStateReducer, {
    round: dataFromBackend.rounds[0].current,
    cardsToDeal: dataFromBackend.rounds[0].cardsToDeal,
    game: players,
  });
  //This will be unnecesary after conect backend
  const [innerRound, setInnerRound] = React.useState(1);

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
    e.preventDefault();
    const tablePlayersRound = gameState.game;
    tablePlayersRound.forEach((p) => {
      if (p.bidsLost === 0) {
        return setGameState({ manage: "win", player: p.key });
      }
    });
    setInnerRound(innerRound + 1);
  }

  React.useEffect(() => {
    window.localStorage.setItem("PlayersRound", JSON.stringify(gameState.game));
  }, [innerRound]);

  return (
    <div className="main-container">
      <div className="round-info-container">
        <h1>Round: {gameState.round}</h1>
        <h1>Cartas: {gameState.cardsToDeal}</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {players.map((p) => {
              return (
                <div className="player-display-container">
                  <h2>{p.name}</h2>
                  <label htmlFor={p.key}>Apuesta</label>
                  <input
                    type="number"
                    id={p.key}
                    value={p.bid}
                    onChange={handleBidChange}
                  />
                  <label htmlFor={p.key}>Pierde</label>
                  <input
                    type="number"
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
      </div>
      <div className="table-container">
        {dataFromBackend.results.map((p) => {
          return (
            <div className="table-player-container">
              <h1>{p.name}</h1>
              <span>{p.score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
