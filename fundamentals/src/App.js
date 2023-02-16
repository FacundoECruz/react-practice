import React from "react";
import "./App.css";
import table from "./javascripts/table";

function App() {

  const [selected, setSelected] = React.useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {table.map((p, i) => {
          return <div className="item">
            <div className="name" onClick={() => toggle(i)}>
              <p key={p.name}>{p.name} {p.score}</p>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "history-show" : "history"}>{p.history}</div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
