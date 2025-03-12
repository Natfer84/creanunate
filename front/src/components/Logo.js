import React from "react";
import { Link } from "react-router-dom";
import "../styles/Logo.css";

/**
 * Componente que muestra el logo de la aplicación.
 *
 * - Al hacer clic en el logo, redirige al usuario a la página de inicio (`"/"`).
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el logo con enlace a la página principal.
 */

export default function Logo() {
  return (
    <div className="Logo_box">
      {/* Enlace que envuelve la imagen del logo y redirige a la página de inicio */}
      <Link to="/">
        <img
          className="Logo_img"
          src="/images/logoCreanunate.jpg"
          alt="logo"
        ></img>
      </Link>
    </div>
  );
}
