import table from "../javascripts/tableData";

function Names(predicate) {
  return(predicate 
    ? table.map(n => {
      return <div key={n.name}>{n.name}, {n.score}</div>
    })
    : null
  )
}

export default Names