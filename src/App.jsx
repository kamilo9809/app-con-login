import Login from './pages/components/login';
import MainSuperAdmin from './pages/mainSuperAdmin';
import PreguntaForm from './pages/components/form';
import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Login />} />
        <Route path="/" element={<MainSuperAdmin />} />
        <Route path="/form" element={<PreguntaForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
