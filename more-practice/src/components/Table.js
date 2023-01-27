import React from "react";
import usePlayer from "../hooks/usePlayer";
import GameInfo from "../components/GameInfo";

function Table() {
  const playersTable = usePlayer();

  const orderTable = playersTable.sort(function (a, b) {
    return b.score - a.score;
  });

  return (
    <div>
      <h2>Tabla de posiciones</h2>
      {orderTable.map((p) => {
        return (
          <div>
            <h3>{p.name}</h3>
            <span>{p.score}</span>
          </div>
        );
      })}
      <div>
        <GameInfo />
      </div>
    </div>
  );
}

export default Table;
