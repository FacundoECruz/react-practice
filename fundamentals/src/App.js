import React from "react";
import "./App.css";
import Data from "./components/Posts";
import './stylesheets/posts.css'

function App() {
  return (
    <div className="App">
      <h1>SocioloGists</h1>
      <div className="posts-list-container">
        <Data />
      </div>
    </div>
  );
}

export default App;
