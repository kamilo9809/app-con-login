import { useState } from "react";
import { Link } from "react-router-dom";
import PreguntaForm from "./components/form";



function MainSuperAdmin (){
    const {ventana, setVentana} = useState(false);

    return(
        <div className="app">
      <header className="bg-blue-800 p-5">
        <div className="menu flex space-x-4 text-white">
          <div className="mt-2">
            <button className="hover:underline">Inicio</button>
          </div>
          <div className="mt-2">
            <button className="hover:underline">Usuarios</button>
          </div>
          <div className="mt-2">
            <Link><button className="hover:underline">fourmulario</button></Link>
          </div>
          <div className="mt-2">
            <button className="hover:underline">Cerrar Sesion</button>
          </div>
        </div>
      </header>
      <PreguntaForm />
    </div>
  );
}

export default MainSuperAdmin;