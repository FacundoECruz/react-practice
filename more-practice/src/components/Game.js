import { useContext } from "react";
import { GameContext } from "../game/GameProvider";
import { types } from "../game/GameReducer"

function Game() {
  const [game, dispatch] = useContext(GameContext);

  const { round, players } = game;

  return (
    <>
      <h2>Round: {round}</h2>
      <h3>{players.name}</h3>
      <label onClick={() => dispatch({type: types.resetBid})}>Apuesta</label>
      <p>{players.bid}</p> 
      <button onClick={() => dispatch({type: types.addBid})}>+</button>
      <label>Pierde</label>
      <p>{players.bidsLost}</p>
      <button>+</button>
    </>
  );
}

export default Game;
