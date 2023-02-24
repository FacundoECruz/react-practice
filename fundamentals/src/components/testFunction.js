import{useState, useRef} from 'react'

export function capitalize(name) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return capitalizedName;
}

function Greeting() {

  const [name, setName] = useState('')
  const inputRef = useRef()

  function handleChange() {
    const inputText = capitalize(inputRef.current.value)
    setName(inputText)
  }

  return (
    <div>
      <label>Nombre: </label>
      <input ref={inputRef} id="name" type="text" value={name} onChange={handleChange}/>
      <h1>Hola {name}</h1>
    </div>
  );
}

export default Greeting;
