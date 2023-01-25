function Player({
  state,
  setBidState,
  setLoseState,
  resetBid,
  resetLost,
  key,
}) {

    return (
    <div>
      <h2>{state[key].name}</h2>
      <p onClick={resetBid}>Apuesta</p>
      <button id="bid" onClick={setBidState}>
        {state[key].bid}
      </button>
      <p onClick={resetLost}>Pierde</p>
      <button id="lost" onClick={setLoseState}>
        {state[key].bidsLost}
      </button>
    </div>
  );
}

export default Player;
