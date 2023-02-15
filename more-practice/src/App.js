import "./App.css";
import React from "react";
import Names from "./components/Names";
import History from "./components/History";
import Table from "./components/Table";

function App() {

  const [toggle, setToggle] = React.useState(true)

  function handleClick() {
    setToggle(!toggle)
  }

  React.useEffect(() => {
    console.log(toggle)
  })

  return (
    <Table predicate={toggle}>
      <h1 onClick={handleClick}>Table</h1>
      <Names />
      <History />
    </Table>
  );
}

export default App;
