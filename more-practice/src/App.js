import "./App.css";
import React from "react";

function App() {

  const [value, setValue] = React.useState(0)

  const addValue = (e) => {
    console.log(value)
  }
  
  React.useEffect(() => {
    
  })

  return (
    <>
      <h1>Registro insulina</h1>
      <label htmlFor="num">Nro</label>
      <input type="number" id="num" onChange={(e) => setValue(e.target.value)} className="num-imput"/>
      <button className="add-button" onClick={addValue}>Agregar</button>
    </>
  );
}

export default App;
