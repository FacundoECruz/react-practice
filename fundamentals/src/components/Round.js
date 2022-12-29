import React from "react";

function Round() {
  const cardsPerRound = window.localStorage.getItem('cards')

  console.log(cardsPerRound)

  const [round, setRound] = React.useState(1);
  const [cardsInCurrent, setCardsInCurrent] = React.useState(0);

  return (
    <div className="round-container">
      <h2>Ronda {round}</h2>
      <h3>Cartas</h3>
    </div>
  );
}

export default Round;
