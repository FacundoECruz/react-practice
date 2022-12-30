import React from "react";
import "./App.css";
import Round from "./components/Round.js";
import Table from "./components/Table";

function App() {
  return (
    <div className="main-container">
      <Round />
      <Table />
    </div>
  );
}

export default App;
