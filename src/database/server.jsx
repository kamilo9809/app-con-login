import { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState([]);

  const fetchDataFromBackend = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/loginadmin');
      console.log('Data from backend:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };

  useEffect(() => {
    // Llamamos a la función fetchDataFromBackend al montar el componente
    fetchDataFromBackend();
  }, []);

  return (
    <div>
      <h1>usuarios admin</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.nombre_de_usuario}</li>
        ))}
      </ul>jdjdlajfa
    </div>
  );
};

export default YourComponent;
