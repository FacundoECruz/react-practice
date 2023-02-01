const playersNames = ['Facu', 'Messi', 'Diego', 'Mbappe']

const playersData = playersNames.map(p => {
  return {
    name: p,
    bid: 0,
    bidsLost: 0,
    score: 0
  }
})

export { playersData }