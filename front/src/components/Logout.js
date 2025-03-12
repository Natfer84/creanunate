import { useNavigate } from "react-router-dom";
import "../styles/Logout.css";

/**
 * Componente que maneja el cierre de sesión del usuario.
 *
 * - Elimina los datos del usuario almacenados en `localStorage`.
 * - Redirige al usuario a la página de inicio (`"/"`).
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el botón de cierre de sesión.
 */

const Logout = () => {
  const navigate = useNavigate();

  /**
   * Maneja el cierre de sesión.
   *
   * - Elimina el token de autenticación y los datos del usuario del `localStorage`.
   * - Redirige al usuario a la página de inicio (`"/"`).
   *
   * @function handleLogout
   */

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="Box__LogOut">
      {/* Al hacer clic, se ejecuta la función handleLogout para cerrar sesión */}
      <div onClick={handleLogout} className="Box__LogOut__div">
        Cerrar sesión
      </div>
    </div>
  );
};

export default Logout;
