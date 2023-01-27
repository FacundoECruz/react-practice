import React from "react";
import usePlayer from "../hooks/usePlayer";

function Table() {
  const playersTable = usePlayer();

  const orderTable = playersTable.sort(function (a, b) {
    return b.score - a.score;
  });

  console.log(orderTable)

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
    </div>
  );
}

export default Table;
