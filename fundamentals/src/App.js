import React from "react";
import "./App.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ characterData }) => {
  const [people, setPeople] = React.useState(characterData);

  function removeCharacter(index) {
    
    setPeople(people.slice(index, 1));

  }

  const rows = people.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

function App() {
  const characters = [
    {
      name: "Charlie",
      job: "Janitor",
    },
    {
      name: "Mac",
      job: "Bouncer",
    },
    {
      name: "Dee",
      job: "Aspring actress",
    },
    {
      name: "Dennis",
      job: "Bartender",
    },
  ];


  return (
    <div className="container">
      <table>
        <TableHeader />
        <TableBody
          characterData={characters}
        />
      </table>
    </div>
  );
}

export default App;
