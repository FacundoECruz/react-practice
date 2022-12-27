import React from "react";
import "./App.css";

function Child() {

  const [count, setCount] = React.useState(() => {return 0})

  return(
    <button onClick={() => setCount(previousCount => previousCount + 1)}>
      {count}
    </button>
  )
}

function Element({showChild, setShowChild}) {
  return (
    <div>
      <form>
        <label htmlFor="show">Show Child</label>
        <input 
        id="show" 
        type="checkbox" 
        checked={showChild}
        onChange={e => setShowChild(e.target.checked)} />
      </form>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: "solid",
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </div>
  );
}

function App() {

  const [showChild, setShowChild] = React.useState(() => {
    console.log("%cApp: useState(() => false)", "color: tomato");
    return false;
  });

  return <Element showChild={showChild} updater={setShowChild}/>;
}

export default App;
