import React from "react";
import "../stylesheets/Game.css";

function PlayerGrid({ name, players }) {

  const table = [...players]
  
  const [control, setControl] = React.useState(table);
  
  // const [table, setTable] = React.useState(players);
  const currentPlayer = table.findIndex((p) => p.name === name);
  
  const handleControl = (item, action) => {
    setControl((prevState) => {
      return {
        ...prevState,
        
        [item]: action === "up" ? control[currentPlayer][item] + 1 : control[currentPlayer][item] - 1,
      };
    });
  };
  
  const saveResults = (e) => {
    const newScore =
      parseInt(control[currentPlayer].lose) === 0
        ? control[currentPlayer].score + 5 + control[currentPlayer].bet
        : control[currentPlayer].score - control[currentPlayer].lose;
    const newControl = {
      bet: 0,
      lose: 0,
      score: newScore,
    };
    setControl(newControl);
    // console.log(control)

    // const tableCopy = [...table]
    // function addScore() {
    //   tableCopy[currentPlayer].score = newScore
    //   return tableCopy
    // }
    // setTable(addScore());
  }
  return (
    <div className="player-info-container">
      <h1>
        {name} {control.score}
      </h1>
      <div className="controls">
        <div className="bet">
          <div className="label-display">
            <span>Apuesta</span>
            <div
              className={
                parseInt(control.bet) === 0
                  ? "num-display"
                  : "num-display-active"
              }
            >
              {control.bet}
            </div>
          </div>
          <div className="buttons">
            <button
              className="up-button"
              onClick={() => handleControl("bet", "up")}
            >
              +
            </button>
            <button
              className="down-button"
              onClick={() => handleControl("bet", "down")}
            >
              -
            </button>
          </div>
        </div>
        <div className="lose">
          <div className="label-display">
            <span>Pierde</span>
            <div
              className={
                parseInt(control.lose) === 0
                  ? "num-display"
                  : "num-display-active"
              }
            >
              {control.lose}
            </div>
          </div>
          <div className="buttons">
            <button
              className="up-button"
              onClick={() => handleControl("lose", "up")}
            >
              +
            </button>
            <button
              className="down-button"
              onClick={() => handleControl("lose", "down")}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <button className="save-button" onClick={saveResults}>
        Resultados
      </button>
    </div>
  );
}

function Round() {
  const cardsPerRound = JSON.parse(window.localStorage.getItem("cards"));
  const players = JSON.parse(window.localStorage.getItem("players"));

  const [round, setRound] = React.useState(1);
  const [cardsInCurrent, setCardsInCurrent] = React.useState(cardsPerRound[0]);

  const nextRound = () => {
    setRound(round + 1);
    setCardsInCurrent(cardsPerRound[round]);
  };

  return (
    <div className="round-container">
      <div className="title-container">
        <h2>Ronda {round}</h2>
        <h3>Cartas: {cardsInCurrent}</h3>
      </div>
      <div className="player-grids-container">
        {players.map((player) => (
          <PlayerGrid key={player.name} name={player.name} players={players} />
        ))}
      </div>
      <button className="next-round-button" onClick={nextRound}>
        Siguiente Ronda
      </button>
    </div>
  );
}

function Game() {
  return (
    <div className="main-container">
      <Round />
    </div>
  );
}

export default Game;
