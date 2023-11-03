
const Form = () => {
  return (
    <form>
      <h1>Pregunta 1</h1>
      {/*Pregunta*/}
      <label 
      htmlFor="Pregunta">Titulo de la pregunta</
      label>
      <input type="text" />

      {/*Seleccionar pregunta*/}
      <label 
      htmlFor="Seleccionar pregunta">Seleccionar Pregunta</label>
      <select>
        <option
        value="abi">Abierta</option>
        <option
        value="cer">Cerrada</option>
      </select>

      {/*Descripcion pregunta*/}
      <label 
      htmlFor="Descripcion">Descripcion de la pregunta</
      label>
      <input type="text" />


      {/*Opcion cerrada*/}
      <label 
      htmlFor="Descripcion">Cerrada</
      label>
      <input type="checkbox" />


      <button>Siguiente</button>
      
      
    </form>
  )
}

export default Form
