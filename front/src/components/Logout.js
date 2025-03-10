import { useNavigate } from "react-router-dom";
import "../styles/Logout.css"

// Cerrar sesión en área cliente.
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Borra el token, el nombre y el id.
    localStorage.removeItem("token");       
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    navigate("/"); 
  };

  return (
    <div className="Box__LogOut">
      <div onClick={handleLogout} className="Box__LogOut__div">Cerrar sesión</div>
    </div>
  );
};

export default Logout;
