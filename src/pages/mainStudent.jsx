import NavbarStudent from "./components/navbarStudent";

function MainStudent() {
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
    <div>
      <NavbarStudent />
      <h2 style={estiloTexto}>¡Bienvenido, {usernameSinGuionBajo} (Estudiante)!</h2>
    </div>
  );
}

export default MainStudent;