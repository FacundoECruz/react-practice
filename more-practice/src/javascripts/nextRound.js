import calculateRound from "./calculateRound";

function nextRound(state) {
  let stateCopy = { ...state };
  let newState = calculateRound(stateCopy.players)
  newState.round += 1;
  newState.players.map(p => {
    p.bid = 0;
    p.bidsLost = 0;
  })
  return newState;
}

export default nextRound;
