import { useEffect, useState } from "react";

function New() {

  const [data, setData] = useState([])

  const apiGet = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json)
    })
  }

  useEffect(() => {
    apiGet()
  }, [])
    


  return(
    <h2>new.title</h2>
  )
}

export default New;