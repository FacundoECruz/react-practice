function calculateTable(players) {
  
}

function nextRound(state) {
  let stateCopy = { ...state };
  let newState = calculateTable(stateCopy.players)
  newState.round += 1;
  newState.players.bid = 0;
  newState.players.bidsLost = 0;
  return newState;
}

export default nextRound;
