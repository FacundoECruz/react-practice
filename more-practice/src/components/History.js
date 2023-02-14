import table from "../javascripts/tableData";

function History() {
  return(
    table.map(n => {
      return <div>{n.history}</div>
    })
  )
}

export default History