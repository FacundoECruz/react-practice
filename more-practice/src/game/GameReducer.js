import { playersData } from "../javascripts/playersData";
import nextRound from "../javascripts/nextRound";

const types = {
  addBid: "bid - add",
  resetBid: "bid - reset",
  addLost: "lost - add",
  resetLost: "lost - reset",
  nextRound: "round - next",
};

const gameState = {
  round: 1,
  players: playersData,
  table: []
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case types.addBid: {
      return {
        ...state,
        bid: state.players[action.index].bid += 1
      };
    }
    case types.resetBid: {
      let newState = {...state}
      newState.players[action.index].bid = 0
      return newState;
    }
    case types.addLost: {
      return {
        ...state,
        bidsLost: (state.players[action.index].bidsLost += 1),
      };
    }
    case types.resetLost: {
      let newState = {...state}
      newState.players[action.index].bidsLost = 0
      return newState;
    }
    case types.nextRound: {
      let newState = nextRound(state)
      return newState
    }
    default:
      return state;
  }
};

export { gameState, types };
export default gameReducer;