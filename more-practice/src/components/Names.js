import table from "../javascripts/tableData";

function Names() {
  return(
    table.map(n => {
      return <div key={n.name}>{n.name}, {n.score}</div>
    })
  )
}

export default Names