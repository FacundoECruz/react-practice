import "./App.css";
import React from "react";
import Names from "./components/Names";
import History from "./components/History";
import Table from "./components/Table";
import Control from "./components/Control";

function App() {

  const [display, setDisplay] = React.useState(true)

  function handleCheck() {
    setDisplay(!display)
  }

  React.useEffect(() => {
    console.log(display)
  })

  return (
    <Table predicate={display}>
      <h1>Table</h1>
      <Control />
      <Names />
      <History />
    </Table>
  );
}

export default App;
