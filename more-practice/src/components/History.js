import table from "../javascripts/tableData";

function History(predicate) {
  return(predicate 
    ? null
    : table.map(n => {
      return <div key={n.name}>{n.history}</div>
    })
  )
}

export default History