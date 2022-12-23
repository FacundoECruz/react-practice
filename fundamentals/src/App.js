import React from "react";
import "./App.css";

function Button({onClick}) {

  const [clicks, setClicks] = React.useState(0)

  function handleClick(event) {
    setClicks(clicks + 1)
  }

  return(
    <button onClick={handleClick}>{clicks}</button>
  )
}

function App() {
  return (
    <Button />
  )
}

export default App;
