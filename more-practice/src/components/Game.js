import { useContext } from "react";
import { GameContext } from "../game/GameProvider";
import { types } from "../game/GameReducer";
import PlayerGrid from "./PlayerGrid";

function Game() {
  const [game, dispatch] = useContext(GameContext);

  const {round, players} = game;

  console.log(game);

  return (
    <>
      <h2>Round: {round}</h2>
      {players.map(p => {
        return <PlayerGrid key={p.key}/>
      })}
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
