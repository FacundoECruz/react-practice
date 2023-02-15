import table from "../javascripts/tableData";

function History() {
  return(
    table.map(n => {
      return <div key={n.name}>{n.history}</div>
    })
  )
}

export default History