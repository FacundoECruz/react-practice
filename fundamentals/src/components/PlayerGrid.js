function PlayerGrid({ name }) {

  return (
    <div className="player-info-container">
      <h1>{name}</h1>
      <div className="bet">
        <div className="bet-buttons">
          <button>+</button>
          <button>-</button>
        </div>
        <div className="bet-display">3</div>
      </div>
      <div className="lose">
        <div className="lose-buttons">
          <button>+</button>
          <button>-</button>
        </div>
        <div className="lose-display">0</div>
      </div>
    </div>
  );
}

export default PlayerGrid;
