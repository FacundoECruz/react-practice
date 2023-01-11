import React from "react";
import usePlayer from "../hooks/usePlayer";

function PlayerInfo() {
  const player = usePlayer();

  return (
    <div>
      <h2>Info del Player</h2>
      <p>Name: {player.name}</p>
      <p>Bid: {player.bid}</p>
      <p>BidLost: {player.bidsLost}</p>
    </div>
  );
}

export default PlayerInfo;
