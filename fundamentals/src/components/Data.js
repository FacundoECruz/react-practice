import { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return data.map((d) => {
    return(
    <>
      <h1>
        {d.title} 
      </h1>
      <p>from {d.userId}</p>
      <p>{d.body}</p>
    </>
    );
  });
}

export default Data;
