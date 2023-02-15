function Control() {
  return (
    <>
      <label htmlFor="table">Tabla</label>
      <input type="checkbox" id="table" />
      <label htmlFor="history">Historia</label>
      <input type="checkbox" id="history" />
      <label htmlFor="both">Ambos</label>
      <input type="checkbox" id="both" />
    </>
  );
}

export default Control;
