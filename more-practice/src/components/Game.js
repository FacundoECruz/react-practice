import { useContext } from "react";
import { GameContext } from "../game/GameProvider";
import { types } from "../game/GameReducer"

function Game() {
  const [game, dispatch] = useContext(GameContext);

  console.log(game);

  return (
    <>
      <h3>{game.name}</h3>
      <p id="bid">{game.bid}</p> 
      <button onClick={() => dispatch({type: types.addBid})}>+</button>
      <button onClick={() => dispatch({type: types.resetBid})}>Reset</button>
      <br />
      <label htmlFor="lost">Pierde</label>
      <p id="lost">{game.bidsLost}</p>
      <button>+</button>
    </>
  );
}

export default Game;
