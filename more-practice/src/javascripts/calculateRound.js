function calculateRound(roundState) {

  const pointsForWin = 5;

  roundState.map(p => {
    if (p.bidsLost === 0) {
      p.score = p.score + pointsForWin + p.bid;
    } else {
      p.score = p.score - p.bidsLost;
    }
  })
  return roundState
}


export default calculateRound;