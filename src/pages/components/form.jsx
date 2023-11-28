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
    };

    try {
      const response = await axios.post('http://localhost:3001/api/preguntas', data);

      if (response.statusCode === 200) {
        console.log('pregunta enviada con éxito');
      } else {
        console.error('error al enviar la pregunta');
      }
    } catch (error) {
      console.error('error al realizar la solicitud', error);
    }

    console.log('Pregunta:', pregunta);
    console.log('Tipo de pregunta:', tipoPregunta);
    if (tipoPregunta === 'cerrada') {
      console.log('Opciones de respuesta:', opcionesRespuesta);
    }
  };

  const username = localStorage.getItem('username');

  return (
    <div className="flex flex-col h-screen">
      <NavbarSA Username={username} />
      <div className="flex items-center justify-center flex-grow">
        <div className="w-1/2 text-center">
          <h2 className="text-3xl font-bold mb-4">Crear una pregunta</h2>
          <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label htmlFor="pregunta" className="block text-gray-700 text-sm font-bold mb-2">
              Pregunta:
            </label>
            <input
              type="text"
              id="pregunta"
              value={pregunta}
              onChange={(e) => setPregunta(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-blue-800 text-white"
              placeholder="Escribe tu pregunta aquí..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tipoPregunta" className="block text-gray-700 text-sm font-bold mb-2">
              Tipo de pregunta:
            </label>
            <select
              id="tipoPregunta"
              value={tipoPregunta}
              onChange={(e) => {
                setTipoPregunta(e.target.value);
                setOpcionesRespuesta(['', '', '', '']);
              }}
              className="w-full px-3 py-2 border rounded bg-blue-800 text-white"
            >
              <option value="abierta">Abierta</option>
              <option value="cerrada">Cerrada</option>
            </select>
          </div>
          {tipoPregunta === 'cerrada' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Opciones de respuesta:</label>
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
                  className="w-full px-3 py-2 border rounded bg-blue-800 text-white mb-2"
                />
              ))}
            </div>
          )}
          <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Crear Pregunta
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default PreguntaForm;