import { playersData } from "../javascripts/playersData";
const types = {
  addBid: "bid - add",
  resetBid: "bid - reset",
  addLost: "lost - add",
  resetLost: "lost - reset",
  nextRound: "round - next",
};

const gameState = {
  round: 1,
  players: playersData
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case types.addBid: {
      return {
        ...state,
        bid: state.players.bid += 1
      };
    }
    case types.resetBid: {
      let newState = {...state}
      newState.players.bid = 0
      return newState;
    }
    case types.addLost: {
      return {
        ...state,
        bidsLost: (state.players.bidsLost += 1),
      };
    }
    case types.resetLost: {
      let newState = {...state}
      newState.players.bidsLost = 0
      return newState;
    }
    case types.nextRound: {
      let newState = {...state}
      newState.round += 1
      newState.players.bid = 0
      newState.players.bidsLost = 0
      return newState
    }
    default:
      return state;
  }
};

export { gameState, types };
export default gameReducer;
