import { Link } from "react-router-dom"

Link

const NavbarAdmin = () => {
  return (
    <div className="app">
      <header className="bg-blue-800 p-5">
        <div className="menu flex space-x-4 text-white">
          <div className="mt-2">
            <Link id="inicio" to={"/inicioAdmin"} className="hover:underline">
              Inicio
            </Link>
          </div>
          <div className="mt-2">
            <Link id="form" to={"/PreguntaForm"} className="hover:underline">
              formulario
            </Link>
          </div>
          <div className="mt-2">
            <Link to={"/"} className="hover:underline">
              Cerrar Sesion
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavbarAdmin
