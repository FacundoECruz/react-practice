import { useState, useRef } from "react";

export function capitalize(name) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return capitalizedName;
}

function Greeting() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault()
    const inputText = capitalize(inputRef.current.value);
    console.log(inputText)
    setName(inputText);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          ref={inputRef}
          id="name"
          type="text"
        />
        <button type="submit">Saludar</button>
      </form>
      <h1>Hola {name}</h1>
    </div>
  );
}

export default Greeting;
