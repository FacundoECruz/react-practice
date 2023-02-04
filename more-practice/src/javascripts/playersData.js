const playersNames = ['Facu', 'Messi', 'Diego', 'Mbappe']

const playersData = playersNames.map((p, index) => {
  return {
    name: p,
    bid: 0,
    bidsLost: 0,
    score: 0,
    key: index
  }
})

export { playersData }