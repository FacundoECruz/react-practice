import { useState, useRef } from "react";

export function capitalize(name) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return capitalizedName;
}

export function response(value) {

}

function Greeting() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const states = [1, 2, 3, 4, 5]

  function handleSubmit(event) {
    event.preventDefault()
    const inputText = capitalize(inputRef.current.value);
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
        <br />
        {states.map((s) => {
          return <input type="checkbox" id={s} key={s}/>
        })}
        <br />
        <button type="submit">Saludar</button>
      </form>
      <h1>Hola {name}</h1>
    </div>
  );
}

export default Greeting;
