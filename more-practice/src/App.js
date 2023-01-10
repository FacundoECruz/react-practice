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

  const [player0State, setPlayer0State] = React.useState(players[0]);
  const [player1State, setPlayer1State] = React.useState(players[1]);
  const [player2State, setPlayer2State] = React.useState(players[2]);
  const [player3State, setPlayer3State] = React.useState(players[3]);

  //  console.log(player0State)
  //  console.log(player1State)
  //  console.log(player2State)
  //  console.log(player3State)
  //  console.log('***********')

  function handlePlayer0BidState() {
    setPlayer0State((prevState) => {
      let newState = { ...prevState };
      newState.bid = newState.bid + 1;
      return newState;
    });
  }

  function handlePlayer0LoseState() {
    setPlayer0State((prevState) => {
      let newState = { ...prevState };
      newState.lost = newState.lost + 1;
      return newState;
    });
  }

  function resetPlayer0Bid() {
    setPlayer0State((prevState) => {
      let newState = { ...prevState };
      newState.bid = 0;
      return newState;
    });
  }

  function resetPlayer0Lost() {
    setPlayer0State((prevState) => {
      let newState = { ...prevState };
      newState.lost = 0;
      return newState;
    });
  }

  function handlePlayer1BidState() {
    setPlayer1State((prevState) => {
      let newState = { ...prevState };
      newState.bid = newState.bid + 1;
      return newState;
    });
  }

  function handlePlayer1LoseState() {
    setPlayer1State((prevState) => {
      let newState = { ...prevState };
      newState.lost = newState.lost + 1;
      return newState;
    });
  }

  function resetPlayer1Bid() {
    setPlayer1State((prevState) => {
      let newState = { ...prevState };
      newState.bid = 0;
      return newState;
    });
  }

  function resetPlayer1Lost() {
    setPlayer1State((prevState) => {
      let newState = { ...prevState };
      newState.lost = 0;
      return newState;
    });
  }

  function handlePlayer2BidState() {
    setPlayer2State((prevState) => {
      let newState = { ...prevState };
      newState.bid = newState.bid + 1;
      return newState;
    });
  }

  function handlePlayer2LoseState() {
    setPlayer2State((prevState) => {
      let newState = { ...prevState };
      newState.lost = newState.lost + 1;
      return newState;
    });
  }

  function resetPlayer2Bid() {
    setPlayer2State((prevState) => {
      let newState = { ...prevState };
      newState.bid = 0;
      return newState;
    });
  }

  function resetPlayer2Lost() {
    setPlayer2State((prevState) => {
      let newState = { ...prevState };
      newState.lost = 0;
      return newState;
    });
  }

  function handlePlayer3BidState() {
    setPlayer3State((prevState) => {
      let newState = { ...prevState };
      newState.bid = newState.bid + 1;
      return newState;
    });
  }

  function handlePlayer3LoseState() {
    setPlayer3State((prevState) => {
      let newState = { ...prevState };
      newState.lost = newState.lost + 1;
      return newState;
    });
  }

  function resetPlayer3Bid() {
    setPlayer3State((prevState) => {
      let newState = { ...prevState };
      newState.bid = 0;
      return newState;
    });
  }

  function resetPlayer3Lost() {
    setPlayer3State((prevState) => {
      let newState = { ...prevState };
      newState.lost = 0;
      return newState;
    });
  }

  return (
    <div className="App">
      <div className="main-container">
        <Round />
        <Player
          state={player0State}
          setBidState={handlePlayer0BidState}
          setLoseState={handlePlayer0LoseState}
          resetBid={resetPlayer0Bid}
          resetLost={resetPlayer0Lost}
        />

        <Player
          state={player1State}
          setBidState={handlePlayer1BidState}
          setLoseState={handlePlayer1LoseState}
          resetBid={resetPlayer1Bid}
          resetLost={resetPlayer1Lost}
        />

        <Player
          state={player2State}
          setBidState={handlePlayer2BidState}
          setLoseState={handlePlayer2LoseState}
          resetBid={resetPlayer2Bid}
          resetLost={resetPlayer2Lost}
        />

        <Player
          state={player3State}
          setBidState={handlePlayer3BidState}
          setLoseState={handlePlayer3LoseState}
          resetBid={resetPlayer3Bid}
          resetLost={resetPlayer3Lost}
        />
      </div>
    </div>
  );
}

export default App;
