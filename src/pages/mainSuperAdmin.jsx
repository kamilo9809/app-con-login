import NavbarSA from "./components/navbar";
import Navbar from "./components/navbar";

function MainSuperAdmin() {
  // Recupera el username de localStorage
  const username = localStorage.getItem("username");

  // Elimina el guion bajo del nombre de usuario
  const usernameSinGuionBajo = username.replace(/_/g, ' ');

  const estiloTexto = {
    textAlign: "center",
    fontSize: "2em", // Puedes ajustar el tamaño según tus preferencias
    fontWeight: "bold", // Puedes ajustar el peso de la fuente según tus preferencias
  };


  return (
    <>
      <NavbarSA Username={usernameSinGuionBajo} />
      <h2 style={{ textAlign: "center", fontSize: "2em", fontWeight: "bold" }}>
        ¡Bienvenido, {usernameSinGuionBajo} (Super Admin)!
      </h2>
    </>
  );
}

export default MainSuperAdmin;