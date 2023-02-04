import { useContext } from "react";
import { GameContext } from "../game/GameProvider";
import { types } from "../game/GameReducer";

function Table() {
  const [game, dispatch] = useContext(GameContext);

  const { players } = game;

  return (
    <>
      <h2>Tabla de posiciones</h2>
      {players.map(p => {
       return <p>{p.name}: {p.score}</p>
      })}
    </>
  );
}

export default Table;
