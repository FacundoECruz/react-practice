import { useState, useRef, useEffect } from "react"

function Form() {

  const [name, setName] = useState(null)

  const inputRef = useRef()

  useEffect(() => {
    console.log(`nameRef: ${inputRef.current.value}, name: ${name}`)
  })
  
  function handleSubmit(e){
    e.preventDefault()
    setName(inputRef.current.value)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input ref={inputRef} type="text" name="username"/>
        <button type="submit">Submit</button>
      </form>

      {name ? <p>Hola {name}</p> : null}
    </>
  )
}

export default Form