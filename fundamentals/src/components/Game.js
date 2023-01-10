/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "../stylesheets/Game.css";
import players from "../javascripts/players";
import dataFromBackend from "../javascripts/dataFromBackend";
import Player from "./Player";

function gameStateReducer(state, action) {
  switch (action.manage) {
    case "bid": {
      let newState = {...state}
      newState.game[action.index].bid += 1
      return newState 
    }
    case "lost": {
      let newState = {...state}
      newState.game[action.index].bidsLost += 1
      return newState 
    }
    case "win": {
      const player = state.game[action.player];
      player.win = true;
      return { ...state, ...player };
    }
    case "resetBid": {
      let newState = {...state}
      newState.game[action.index].bid = 0
      return newState 
    }
    case "resetLost": {
      let newState = {...state}
      newState.game[action.index].bidsLost = 0
      return newState 
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

  console.log(gameState.game)
  //This will be unnecesary after conect backend
  const [innerRound, setInnerRound] = React.useState(1);

  const handlePlayersBidState = (index) => {
    setGameState({ index: index, manage: "bid" });
  };

  const handlePlayersLoseState = (index) => {
    setGameState({ index: index, manage: "lost" });
  };

  const resetPlayersBid = (index) => {
    setGameState({ index: index, manage: "resetBid" });
  };

  const resetPlayersLost = (index) => {
    setGameState({ index: index, manage: "resetLost" });
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
                <Player
                  state={gameState.game}
                  setBidState={() => handlePlayersBidState(p.key)}
                  setLoseState={() => handlePlayersLoseState(p.key)}
                  resetBid={() => resetPlayersBid(p.key)}
                  resetLost={() => resetPlayersLost(p.key)}
                  index={p.key}
                />
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
