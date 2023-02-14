import table from "../javascripts/tableData";

function Names() {
  return(
    table.map(n => {
      return <div>{n.name}, {n.score}</div>
    })
  )
}

export default Names