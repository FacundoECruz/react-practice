import React from "react";

function PlayerGrid({ name, nextRound }) {
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
      score: score
    }
    window.localStorage.setItem('score', JSON.stringify(roundScore))
  }

  return (
    <div className="player-info-container">
      <h1>
        {name} {control.score}
      </h1>
      <div className="bet">
        <div className="bet-buttons">
          <button onClick={() => handleControl("bet", "up")}>+</button>
          <button onClick={() => handleControl("bet", "down")}>-</button>
          <span>Apuesta</span>
        </div>
        <div className="bet-display">{control.bet}</div>
      </div>
      <div className="lose">
        <div className="lose-buttons">
          <button onClick={() => handleControl("lose", "up")}>+</button>
          <button onClick={() => handleControl("lose", "down")}>-</button>
          <span>Pierde</span>
        </div>
        <div className="lose-display">{control.lose}</div>
      </div>
    <button onClick={saveResults}>Resultados</button>
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
      <h2>Ronda {round}</h2>
      <h3>Cartas: {cardsInCurrent}</h3>
      <div className="player-grids-container">
        {players.map((player) => (
          <PlayerGrid name={player.name} nextRound={nextRound}/>
        ))}
      </div>
      <button onClick={nextRound}>Siguiente Ronda</button>
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
