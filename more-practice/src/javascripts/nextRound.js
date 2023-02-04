
function nextRound(tableState) {
  const pointsForWin = 5;

  tableState.map(p => {
    if (p.bidsLost === 0) {
      p.score = p.score + pointsForWin + p.bid;
    } else {
      p.score = p.score - p.bidsLost;
    }
  })
  console.log(tableState)
  return tableState;
}

export default nextRound;
