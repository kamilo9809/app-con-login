import Login from "./pages/components/login";
import MainSuperAdmin from "./pages/mainSuperAdmin";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainAdmin from "./pages/mainAdmin";
import MainStudent from "./pages/mainStudent";
import Inicio from "./pages/components/inicio";
import PreguntaForm from "./pages/components/form";
import Usuarios from "./pages/components/usuarios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes basename="/">
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainSuperAdmin />} />
          <Route path="/mainAdmin" element={<MainAdmin />} />
          <Route path="/mainStudent" element={<MainStudent />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/preguntaForm" element={<PreguntaForm />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </BrowserRouter>
      <div>
        <h1>My React App</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.nombre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
