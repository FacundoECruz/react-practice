import { useContext } from "react";
import { GameContext } from "../game/GameProvider";
import { types } from "../game/GameReducer";

function Game() {
  const [game, dispatch] = useContext(GameContext);

  console.log(game);

  return (
    <>
      <h2>Round: {game.round}</h2>
      <h3>{game.player.name}</h3>
      <label htmlFor="lost">Apuesta</label>
      <button onClick={() => dispatch({ type: types.addBid })}>
        {game.player.bid}
      </button>
      <button onClick={() => dispatch({ type: types.resetBid })}>Reset</button>
      <br />
      <label htmlFor="lost">Pierde</label>
      <button onClick={() => dispatch({ type: types.addLost })}>
        {game.player.bidsLost}
      </button>
      <button onClick={() => dispatch({ type: types.resetLost })}>Reset</button>
      <br />
      <button
        onClick={() =>
          dispatch({ type: types.nextRound })
        }
      >
        Siguiente
      </button>
    </>
  );
}

export default Game;
