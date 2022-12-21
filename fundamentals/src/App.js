import React from "react";
import "./App.css";

function Board({ onClick }) {
  function renderButton(i) {
    return <button onClick={() => onClick(i)}>Boton {i}</button>;
  }

  return (
    <div>
      <div className="board-row">
        {renderButton(0)}
        {renderButton(1)}
        {renderButton(2)}
      </div>
      <div className="board-row">
        {renderButton(4)}
        {renderButton(5)}
        {renderButton(6)}
      </div>
      <div className="board-row">
        {renderButton(7)}
        {renderButton(8)}
        {renderButton(9)}
      </div>
    </div>
  );
}

function App() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [history, setHistory] = React.useState([Array(9).fill(null)]);

  const currentButton = history[currentStep];

  function selectButton(index) {
    const newHistory = history.slice(0, currentStep + 1);
    const buttonsCopy = [...currentButton];
    buttonsCopy[index] = "X";

    setHistory([...newHistory, buttonsCopy]);
    setCurrentStep(newHistory.length);
  }

  const clicks = history.map((stepButtons, step) => {
    const desc = step === 0 ? "Go to game start" : `Go to click #${step}`;
    const isCurrentStep = step === currentStep;
    return (
      <li key={step}>
        <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
          {desc} {isCurrentStep ? "(current)" : null}
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      <h1>Button History</h1>
      <Board onClick={selectButton} button={currentButton} />
      <div><ol>{clicks}</ol></div>
    </div>
  );
}

export default App;
