import "./App.css";
import React from "react";

function App() {
  
  const [loading, setLoading] = React.useState(false)
  
  const userData = {
    name: 'Jorge',
    role: 'admin',
  }

  function If ({ predicate, children }) {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {predicate})
    })
  }

  function Then ({predicate, children}) {
    return predicate ? children : null
  }
  
  function Else ({predicate, children}) {
    return predicate ? null : children
  }

  return( 
    <div className="App">
      <If predicate={loading}>
        <Then>Loading</Then>
        <Else>{userData.name}</Else>
      </If>
    </div>
  )
}


export default App;
