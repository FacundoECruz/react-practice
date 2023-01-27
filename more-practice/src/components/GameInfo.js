import React from "react";
import usePlayer from "../hooks/usePlayer";

function GameInfo() {

    const playersTable = usePlayer();
    let scores = [];
    playersTable.forEach(p => {
        let score = p.score;
        scores.push(score)
    }) 

    const totalPoints = scores.reduce((a, b) => a + b, 0);

    return(
        <div>
            <h4>Total Points: {totalPoints}</h4>
            <h4>Va ganando: {playersTable[0].name}</h4>
        </div>
    )
}

export default GameInfo;