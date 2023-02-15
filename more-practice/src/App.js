import "./App.css";
import React from "react";
import Names from "./components/Names";
import History from "./components/History";
import Table from "./components/Table";

function App() {
  return (
    <Table>
      <Names />
      <History />
    </Table>
  );
}

export default App;
