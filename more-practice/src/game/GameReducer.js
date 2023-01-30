const types = {
  addBid: "bid - add",
  resetBid: "bid - reset",
  addLost: "lost - add",
  resetLost: "lost - reset",
};

const initialGame = {
  name: "Facu",
  bid: 0,
  bidsLost: 0,
  win: false,
  score: 0,
  key: 0,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case types.addBid:
      let newState = {...state}
      newState.bid += 1
      return newState
    case types.resetBid: {
      return {
        ...state,
        bid: 0,
      };
    }
    default:
      return state;
  }
};

export { initialGame, types };
export default gameReducer;
