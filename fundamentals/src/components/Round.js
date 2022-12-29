import React from "react";

function Round() {
  const cardsPerRound = JSON.parse(window.localStorage.getItem("cards"))
  const players = JSON.parse(window.localStorage.getItem("players"))

  const [round, setRound] = React.useState(1);
  const [cardsInCurrent, setCardsInCurrent] = React.useState(cardsPerRound[0]);

  console.log(cardsInCurrent)

  return (
    <div className="round-container">
      <h2>Ronda {round}</h2>
      <h3>Cartas: {cardsInCurrent}</h3>
    </div>
  );
}

export default Round;
