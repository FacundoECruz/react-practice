const types = {
  addBid: "bid - add",
  resetBid: "bid - reset",
  addLost: "lost - add",
  resetLost: "lost - reset",
  nextRound: "round - next",
};

const initialGame = {
  round: 1,
  player: {
    name: "Facu",
    bid: 0,
    bidsLost: 0,
    win: false,
    score: 0,
    key: 0,
  },
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case types.addBid: {
      return {
        ...state,
        bid: state.player.bid += 1
      };
    }
    case types.resetBid: {
      let newState = {...state}
      newState.player.bid = 0
      return newState;
    }
    case types.addLost: {
      return {
        ...state,
        bidsLost: (state.player.bidsLost += 1),
      };
    }
    case types.resetLost: {
      let newState = {...state}
      newState.player.bidsLost = 0
      return newState;
    }
    case types.nextRound: {
      let newState = {...state}
      newState.round += 1
      newState.player.bid = 0
      newState.player.bidsLost = 0
      return newState
    }
    default:
      return state;
  }
};

export { initialGame, types };
export default gameReducer;
