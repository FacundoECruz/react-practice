export function capitalize(name) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return capitalizedName;
}

function Greeting() {
  return(
    <h1>Hola</h1>
  )
}

export default Greeting