import React from "react";
import "../stylesheets/Game.css";

const reduceCount = (count, change) => ({...count, ...change})

function Game({initialValue = 0, step = 2}) {

  const [state, setState] = React.useReducer(reduceCount, {
    count: initialValue,
  })
  const {count} = state 
  const increment = () => setState({count: count + step})

  return <button onClick={increment}>{count}</button>;
}

export default Game;
