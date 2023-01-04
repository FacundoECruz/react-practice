import React from "react";
import "../stylesheets/Game.css";

function reduceCount(state, action) {
  switch(action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error (`Unsupported ${action.type}`)
    }
  }
}

function Game({ initialValue = 0, step = 2 }) {
  const [state, dispatch] = React.useReducer(reduceCount, {
    count: initialValue,
  });
  const { count } = state;
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>;
}

export default Game;
