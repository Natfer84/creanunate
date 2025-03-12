import React from "react";
import "../styles/Header.css";
import Logo from "./Logo";
import Nav from "./Nav";

/**
 * Componente de encabezado de la aplicación.
 *
 * - Muestra el **logo** de la aplicación.
 * - Incluye la **barra de navegación (`Nav`)** con los enlaces principales.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el encabezado.
 */

export default function Header() {
  return (
    <header className="Header_box">
      {/* Componente del logo */}
      <Logo />

      {/* Componente de navegación */}
      <Nav />
    </header>
  );
}
