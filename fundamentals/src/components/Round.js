import React from "react";
import PlayerGrid from "./PlayerGrid.js";

function Round() {
  const cardsPerRound = JSON.parse(window.localStorage.getItem("cards"));
  const players = JSON.parse(window.localStorage.getItem("players"));

  const [round, setRound] = React.useState(1);
  const [cardsInCurrent, setCardsInCurrent] = React.useState(cardsPerRound[0]);

  const showResults = () => {
    setRound(round+1)
    setCardsInCurrent(cardsPerRound[round])
    console.log(cardsInCurrent)
  }

  return (
    <div className="round-container">
      <h2>Ronda {round}</h2>
      <h3>Cartas: {cardsInCurrent}</h3>
      <div className="player-grids-container">
        {players.map((player) =>
        <PlayerGrid name={player.name}/>
        )}
      </div>
      <button onClick={showResults}>Resultados</button>
    </div>
  );
}

export default Round;
