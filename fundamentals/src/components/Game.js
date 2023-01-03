import React from "react";
import "../stylesheets/Game.css";

function PlayerGrid({ name }) {
  const [control, setControl] = React.useState({
    bet: 0,
    lose: 0,
    score: 0,
  });

  const handleControl = (item, action) => {
    setControl((prevState) => {
      return {
        ...prevState,

        [item]: action === "up" ? control[item] + 1 : control[item] - 1,
      };
    });
  };

  const saveResults = (name, score) => {
    const roundScore = {
      name: name,
      score: score,
    };
    window.localStorage.setItem("score", JSON.stringify(roundScore));
  };

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
          <PlayerGrid name={player.name} />
        ))}
      </div>
      <button className="next-round-button" onClick={nextRound}>
        Siguiente Ronda
      </button>
    </div>
  );
}

// function Table() {
//   return <h1 style={{ color: "blue" }}>Tabla de posiciones</h1>;
// }

function Game() {
  return (
    <div className="main-container">
      <Round />
      {/* <Table /> */}
    </div>
  );
}

export default Game;
