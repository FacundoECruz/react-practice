import "./App.css";
import React from "react";
import moment from "moment/moment";

function App() {

  const [value, setValue] = React.useState(0)

  let insuline = [];

  const addValue = (e) => {
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    insuline.push(`fecha: ${date}, insulina: ${value}`)
    console.log(insuline)
    window.localStorage.setItem('insuline', insuline)
    setValue(0);
  }

  return (
    <>
      <h1>Registro insulina</h1>
      <label htmlFor="num">Nro</label>
      <input type="number" id="num" value={value} onChange={(e) => setValue(e.target.value)} className="num-imput"/>
      <button className="add-button" onClick={addValue}>Agregar</button>
    </>
  );
}

export default App;
