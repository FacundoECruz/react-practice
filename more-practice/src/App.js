import "./App.css";
import React from "react";
import Round from "./components/Round";
import Player from "./components/Player";

function App() {
  const players = [
    {
      name: "Lincoln",
      bid: 0,
      lost: 0,
      key: 0,
    },
    {
      name: "Dali",
      bid: 0,
      lost: 0,
      key: 1,
    },
    {
      name: "Messi",
      bid: 0,
      lost: 0,
      key: 2,
    },
    {
      name: "Charles III",
      bid: 0,
      lost: 0,
      key: 3,
    },
  ];

  function playersStateReducer(state, action) {
    switch (action.manage) {
      case "bid": {
        let newState = { ...state };
        console.log(newState);
        newState[action.index].bid = newState[action.index].bid + 1;
        return newState;
      }
      case "lost": {
        let newState = { ...state };
        newState[action.index].lost = newState[action.index].lost + 1;
        return newState;
      }
      case "resetBid": {
        let newState = { ...state };
        newState[action.index].bid = 0;
        return newState;
      }
      case "resetLost": {
        let newState = { ...state };
        newState[action.index].lost = 0;
        return newState;
      }
      default: {
        throw new Error(`This should be impossible ${action.manage}`);
      }
    }
  }

  const [playersState, setPlayersState] = React.useReducer(
    playersStateReducer,
    players
  );

  //  console.log(player0State)

  const handlePlayersBidState = (index) => {
    setPlayersState({ index: index, manage: "bid" });
  };

  const handlePlayersLoseState = (index) => {
    setPlayersState({ index: index, manage: "lost" });
  };

  const resetPlayersBid = (index) => {
    setPlayersState({ index: index, manage: "resetBid" });
  };

  const resetPlayersLost = (index) => {
    setPlayersState({ index: index, manage: "resetLost" });
  };

  return (
    <div className="App">
      <div className="main-container">
        <Round />
        {players.map((p) => {
          return (
            <Player
              state={playersState}
              setBidState={() => handlePlayersBidState(p.key)}
              setLoseState={() => handlePlayersLoseState(p.key)}
              resetBid={() => resetPlayersBid(p.key)}
              resetLost={() => resetPlayersLost(p.key)}
              index={p.key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
