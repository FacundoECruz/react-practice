import React from "react";

function PlayerGrid({ name }) {

  const [bet, setBet] = React.useState(0)
  const [lose, setLose] = React.useState(0)
  
  return (
    <div className="player-info-container">
      <h1>{name}</h1>
      <div className="bet">
        <div className="bet-buttons">
          <button>+</button>
          <button>-</button>
        </div>
        <div className="bet-display">{bet}</div>
      </div>
      <div className="lose">
        <div className="lose-buttons">
          <button>+</button>
          <button>-</button>
        </div>
        <div className="lose-display">{lose}</div>
      </div>
    </div>
  );
}

export default PlayerGrid;
