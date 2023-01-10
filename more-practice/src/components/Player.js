function Player({
  state,
  setBidState,
  setLoseState,
  resetBid,
  resetLost,
  index
}) {

  return (
    <div>
      <h2>{state[index].name}</h2>
      <p onClick={resetBid}>Apuesta</p>
      <button id="bid" onClick={setBidState}>
        {state[index].bid}
      </button>
      <p onClick={resetLost}>Pierde</p>
      <button id="lost" onClick={setLoseState}>
        {state[index].lost}
      </button>
    </div>
  );
}

export default Player;
