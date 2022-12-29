import React from "react";
import PlayerGrid from "./PlayerGrid.js";

function Round() {
  const cardsPerRound = JSON.parse(window.localStorage.getItem("cards"));
  const players = JSON.parse(window.localStorage.getItem("players"));

  const [round, setRound] = React.useState(1);
  const [cardsInCurrent, setCardsInCurrent] = React.useState(cardsPerRound[0]);

  return (
    <div className="round-container">
      <h2>Ronda {round}</h2>
      <h3>Cartas: {cardsInCurrent}</h3>
      <div className="player-grids-container">
        <h3>Render Array of Components Here</h3>
        {players.map((player) =>
        <PlayerGrid name={player.name}/>
        )}
      </div>
    </div>
  );
}

export default Round;
