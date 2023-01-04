import React from "react";
import "../stylesheets/Game.css";

function reduceCount(state, newState) {
  return newState
}

function Game({initialValue = 0, step = 2}) {

  const [count, setCount] = React.useReducer(reduceCount, initialValue)

  const increment = () => setCount(count + step)

  return <button onClick={increment}>{count}</button>;
}

export default Game;
