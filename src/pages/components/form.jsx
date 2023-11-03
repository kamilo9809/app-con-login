import { useState } from 'react';

const PreguntaForm = () => {
  const [pregunta, setPregunta] = useState('');
  const [tipoPregunta, setTipoPregunta] = useState('abierta');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar los datos del formulario, como enviarlos a un servidor o almacenarlos en el estado de la aplicación.
    console.log('Pregunta:', pregunta);
    console.log('Tipo de pregunta:', tipoPregunta);
  };

  return (
    <div>
      <h2>Crear una pregunta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pregunta">Pregunta:</label>
          <input
            type="text"
            id="pregunta"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
          />
        </div>
        <div>
          <label>Tipo de pregunta:</label>
          <select value={tipoPregunta} onChange={(e) => setTipoPregunta(e.target.value)}>
            <option value="abierta">Abierta</option>
            <option value="cerrada">Cerrada</option>
          </select>
        </div>
        <button type="submit">Crear Pregunta</button>
      </form>
    </div>
  );
};

export default PreguntaForm;