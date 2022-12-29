import React from "react";

function PlayerGrid({ name }) {

  const [control, setControl] = React.useState({
    bet: 0,
    lose: 0
  })
  
  const handleControl = (item, action) => {
    
    setControl((prevState) => {
      return {
        ...prevState,

        [item]: action === 'up'
        ? control[item] + 1
        : control[item] - 1
      }
    })
  } 

  return (
    <div className="player-info-container">
      <h1>{name}</h1>
      <div className="bet">
        <div className="bet-buttons">
          <button onClick={() => handleControl('bet', 'up')}>+</button>
          <button onClick={() => handleControl('bet', 'down')}>-</button>
          <span>Apuesta</span>
        </div>
        <div className="bet-display">{control.bet}</div>
      </div>
      <div className="lose">
        <div className="lose-buttons">
          <button onClick={() => handleControl('lose', 'up')}>+</button>
          <button onClick={() => handleControl('lose', 'down')}>-</button>
          <span>Pierde</span>
        </div>
        <div className="lose-display">{control.lose}</div>
      </div>
    </div>
  );
}

export default PlayerGrid;
