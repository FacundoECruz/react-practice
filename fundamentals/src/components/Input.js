import React from "react";

function Input() {
  return (
    <div className="input-form">
      <form>
        <label htmlFor="name">Name: </label>
        <input id="name"></input>
        <div className="input-button">
            <button>Add Name</button>
        </div>
      </form>
    </div>
  );
}

export default Input;
