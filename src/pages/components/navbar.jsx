import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types'


const NavbarSA = ({ Username }) => {

  const handleLogOut = ()=>{
    //borra los datos del local storage cuando se cierra sesion
    localStorage.clear()
  }

  return (
    <div className="app">
      <header className="bg-blue-800 p-5 flex flex-row">
        <div className="menu flex space-x-4 text-white w-1/2">
          <div className="mt-2">
            <Link id="inicio" to={"/inicio"} className="hover:underline">
              Inicio
            </Link>
          </div>
          <div className="mt-2">
            <Link id="usuarios" to={"/usuarios"} className="hover:underline">
              Usuarios
            </Link>
          </div>
          <div className="mt-2">
            <Link id="form" to={"/PreguntaForm"} className="hover:underline">
              formulario
            </Link>
          </div>
          <div className="mt-2">
            <Link to={"/"} onClick={handleLogOut} className="hover:underline">
              Cerrar Sesión
            </Link>
          </div>
        </div>
        <div className="flex justify-end w-1/2 text-gray-50">
          <h2>{Username}</h2>
        </div>
      </header>
    </div>
  );
};

NavbarSA.propTypes={
  Username:PropTypes.string
}

export default NavbarSA;
