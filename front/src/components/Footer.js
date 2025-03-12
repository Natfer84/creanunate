import React from "react";
import Logo from "./Logo";
//import insta2 from "../public/images/insta2.jpg";
//import face from "../public/images/face.jpg";
import "../styles/Footer.css";

/**
 * Componente de pie de página de la aplicación.
 *
 * - Muestra el **logo** de la aplicación.
 * - Incluye información de **contacto**.
 * - Contiene enlaces a **redes sociales** (Instagram y Facebook).
 * - Muestra el **copyright** de la marca.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el pie de página.
 */

export default function Footer() {
  return (
    <div className="Box__Footer">
      {/* Sección del logo en el footer */}
      <div className="Box_Footer__Logo">
        <Logo />
      </div>

      {/* Sección de redes sociales y contacto */}
      <div className="Box__Footer__Networks">
        {/* Información de contacto */}
        <div className="Box__Footer__Networks_Contact">
          <p className="Box__Footer__Networks_p1">Contacto:</p>
          <a href="https://workspace.google.com/intl/es/gmail/">
            creanunate@gmail.com
          </a>
        </div>
        {/* Enlaces a redes sociales */}
        <div className="Box__Network">
          <div className="Box__Network__Insta">
            <a href="https://www.instagram.com/">
              <img src="images/intagood.jpg" alt="logo instagram"></img>
            </a>
          </div>

          <div className="Box__Network__Facebook">
            <a href="https://www.facebook.com/">
              <img src="/images/face.jpg" alt="logo facebook"></img>
            </a>
          </div>
        </div>
        {/* Copyright */}
        <p className="Box__Footer__Networks_p2">© CreaNuNate</p>
      </div>
    </div>
  );
}
