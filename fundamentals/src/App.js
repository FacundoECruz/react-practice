import React from "react";
import "./App.css";

function Greeting({ name, city, age }) {
  const [club, setClub] = React.useState("");

  const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleClick = () => {
    const options = ["Defensa y justicia", "Gimnasia"];
    const nro = randomNum(0, options.length);
    const result = options[nro];
    setClub(result);
  };

  return (
    <div className="greeting">
      <h1>Hola {name}</h1>
      <h3>
        Porque a los {age}, siendo de {city}
      </h3>
      <h2>Sos de {club}</h2>
      <button onClick={handleClick}>Club</button>
    </div>
  );
}

function App() {
  return <Greeting name="Antone" city="Rio Grande" age="27" />;
}

export default App;
