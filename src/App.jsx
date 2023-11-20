import Login from "./pages/components/login";
import MainSuperAdmin from "./pages/mainSuperAdmin";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainAdmin from "./pages/mainAdmin";
import MainStudent from "./pages/mainStudent";
import Inicio from "./pages/components/inicio";
import PreguntaForm from "./pages/components/form";
import Usuarios from "./pages/components/usuarios";

function App() {
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
    </div>
  );
}

export default App;
