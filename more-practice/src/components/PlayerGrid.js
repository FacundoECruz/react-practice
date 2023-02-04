import { useContext } from "react";
import { GameContext } from "../game/GameProvider";
import { types } from "../game/GameReducer";

const PlayerGrid = ({index}) => {
  const [game, dispatch] = useContext(GameContext);

  const { players } = game;

  return (
    <>
      <h3>{players[index].name}</h3>
      <label htmlFor="lost">Apuesta</label>
      <button onClick={() => dispatch({ type: types.addBid, index: index })}>
        {players[index].bid}
      </button>
      <button onClick={() => dispatch({ type: types.resetBid, index: index })}>Reset</button>
      <br />
      <label htmlFor="lost">Pierde</label>
      <button onClick={() => dispatch({ type: types.addLost, index: index })}>
        {players[index].bidsLost}
      </button>
      <button onClick={() => dispatch({ type: types.resetLost, index: index })}>Reset</button>
    </>
  );
};

export default PlayerGrid;
