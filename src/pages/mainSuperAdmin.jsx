import NavbarSA from "./components/navbar";

function MainSuperAdmin() {
  // Recupera el username de localStorage
  const username = localStorage.getItem("username");
  return (
    <>
      <NavbarSA Username={username} />
      <h2>Aquí se pone el mensaje de bienvenida super admin</h2>
    </>
  );
}

export default MainSuperAdmin;
