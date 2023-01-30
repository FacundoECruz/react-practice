import { useContext } from "react";
import { GameContext } from "../game/GameProvider";
import { types } from "../game/GameReducer"

function Game() {
  const [game, dispatch] = useContext(GameContext);

  const { round, players } = game;

  console.log(game);

  return (
    <>
      <h2>Round: {round}</h2>
      <h3>{players.name}</h3>
      <p id="bid">{players.bid}</p> 
      <button onClick={() => dispatch({type: types.addBid})}>+</button>
      <button onClick={() => dispatch({type: types.resetBid})}>Reset</button>
      <br />
      <label htmlFor="lost">Pierde</label>
      <p id="lost">{players.bidsLost}</p>
      <button>+</button>
    </>
  );
}

export default Game;
