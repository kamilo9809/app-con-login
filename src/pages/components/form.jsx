import { useState } from 'react';
import NavbarSA from './navbar';
import axios from 'axios';

const PreguntaForm = () => {
  const [pregunta, setPregunta] = useState('');
  const [tipoPregunta, setTipoPregunta] = useState('abierta');
  const [opcionesRespuesta, setOpcionesRespuesta] = useState(['', '', '', '']);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Texto_Pregunta: pregunta,
      tipo_pregunta: tipoPregunta
    }

    try {
      //solicitud post
      const response = await axios.post('http://localhost:3001/api/preguntas', data);

      //verificamos si esta madre funciona
      if (response.statusCode === 200) {
        console.log('pregunta enviada con exito');        
      }else{
        console.error('error al enviar la pregunta');
      }
    } catch (error){
        console.error('error al realizar la solicitud', error);
      }
    

    console.log('Pregunta:', pregunta);
    console.log('Tipo de pregunta:', tipoPregunta);
    if (tipoPregunta === 'cerrada') {
      console.log('Opciones de respuesta:', opcionesRespuesta);
    }
  }

  const username = localStorage.getItem('username')

  return (
    <div>
      <NavbarSA Username={username}/>
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
          <select
            value={tipoPregunta}
            onChange={(e) => {
              setTipoPregunta(e.target.value);
              // Reinicia las opciones de respuesta cuando se cambia el tipo de pregunta
              setOpcionesRespuesta(['', '', '', '']);
            }}
          >
            <option value="abierta">Abierta</option>
            <option value="cerrada">Cerrada</option>
          </select>
        </div>
        {tipoPregunta === 'cerrada' && (
          <div>
            <label>Opciones de respuesta:</label>
            {opcionesRespuesta.map((opcion, index) => (
              <input
                key={index}
                type="text"
                value={opcion}
                placeholder={`Opción ${index + 1}`}
                onChange={(e) => {
                  const nuevasOpciones = [...opcionesRespuesta];
                  nuevasOpciones[index] = e.target.value;
                  setOpcionesRespuesta(nuevasOpciones);
                }}
              />
            ))}
          </div>
        )}
        <button type="submit">Crear Pregunta</button>
      </form>
    </div>
  );
};

export default PreguntaForm;
