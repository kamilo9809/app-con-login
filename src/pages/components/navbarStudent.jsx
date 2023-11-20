import { Link } from 'react-router-dom'

const NavbarStudent = () => {
  return (
    <div className="app">
      <header className="bg-blue-800 p-5">
        <div className="menu flex space-x-4 text-white">
          <div className="mt-2">
            <Link id="inicio" to={"/inicioStudent"} className="hover:underline">
              Inicio
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

export default NavbarStudent
