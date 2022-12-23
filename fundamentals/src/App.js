import React from "react";
import "./App.css";

function Button({ onClick }) {
  const [clicks, setClicks] = React.useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  function handleReset() {
    setClicks(0);
  }

  return (
    <div className="container">
      <button onClick={handleClick}>{clicks}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function App() {
  return <Button />;
}

export default App;
