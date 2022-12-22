import React from "react";
import "./App.css";

function Greeting() {
  
  const [club, setClub] = React.useState('')

  const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const name = "Antone";

  const handleClick = () => {
    const options = ["Defensa y justicia", "Gimnasia"];
    const nro = randomNum(0, options.length)
    const result = options[nro] 
    setClub(result);
    console.log(result)
  };

  return (
    <div className="greeting">
    <h1>Hola {name}</h1>
    <h3>Porque sos de {club}</h3>
    <button onClick={handleClick}>Club</button>
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
