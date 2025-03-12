import React from "react";
import { Link } from "react-router-dom";
//import bolsaCompras from "../images/bolsa-compras.jpg";
import "../styles/Nav.css";

/**
 * Componente de navegación principal de la aplicación.
 * Proporciona enlaces a las páginas de Inicio, Cursos y Login.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la barra de navegación.
 */

export default function Nav() {
  return (
    <div className="Nav_container">
      <nav className="Box__nav">
        <ul className="Box__Nav__Ul">
          {/* Enlace a la página de Inicio */}
          <li className="Box__Nav__Li">
            <Link to="/">Inicio</Link>
          </li>
          {/* Enlace a la sección de Cursos */}
          <li className="Box__Nav__Li">
            <Link to="/Course">Cursos</Link>
          </li>
          {/* Enlace a la página de Login */}
          <li className="Box__Nav__Li">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
