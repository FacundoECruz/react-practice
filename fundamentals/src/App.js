import React from "react";
import "./App.css";
import table from "./javascripts/table";

function App() {

  

  return (
    <div className="wrapper">
      <div className="accordion">
        {table.map((p, i) => {
          return <div className="item">
            <div className="name">
              <h2>{p.name} {p.score}</h2>
            </div>
            <div className="history">{p.history}</div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
