function Player({ state, setBidState, setLoseState, resetBid, resetLost }) {

  return (
    <div>
      <h2>{state.name}</h2>
      <p onClick={resetBid}>Apuesta</p>
      <button id="bid" onClick={setBidState}>{state.bid}</button>
      <p onClick={resetLost}>Pierde</p>
      <button id="lost" onClick={setLoseState}>{state.lost}</button>
    </div>
  );
}

export default Player;
