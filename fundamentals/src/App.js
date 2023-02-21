import React from "react";
import "./App.css";

function App() {

  function Form() {

    const [username, setUsername] = React.useState("")

    const handleSubmit = event => {
      event.preventDefault()
      const data = {
        username: event.target.elements.username.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      }
      console.log(data)
    }
    
    const capitalize = str => {
      const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
      console.log(capitalized)
      return capitalized
    }

    const handleChange = event => {
      const {value} = event.target
      setUsername(capitalize(value))
    }

    return(
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input value={username} id="username" type="text" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }

  return <div className="App">
    <Form />
  </div>;
}

export default App;
