import { useContext } from "react";
import { GameContext } from "../game/GameProvider";
import { types } from "../game/GameReducer";
import PlayerGrid from "./PlayerGrid";
import Table from "./Table";

function Game() {
  const [game, dispatch] = useContext(GameContext);

  const { round, players, table } = game;

  // console.log(game);

  return (
    <>
      <h2>Round: {round}</h2>
      {players.map((p) => {
        return <PlayerGrid index={p.key} key={p.key} />;
      })}
      <button onClick={() => dispatch({ type: types.nextRound })}>Siguiente</button>
      <Table data={table}/>
    </>
  );
}

export default Game;
