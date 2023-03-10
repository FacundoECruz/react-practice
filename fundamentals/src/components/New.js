import { useEffect, useState } from "react";

function New() {

  const [news, setNews] = useState([])

  useEffect(() => {
    async function fetchData()  {
      const resp = await fetch(`https://newsapi.org/v2/everything`, {
        
      })
  
    }
  })

  return(
    <h2>new.title</h2>
  )
}

export default New;