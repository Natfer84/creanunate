import React from "react";
import "../styles/Heart.css";
import { useNavigate } from "react-router-dom";

/**
 * Componente que representa un ícono de corazón para agregar un curso a favoritos.
 *
 * - Actualmente, al hacer clic redirige a la página de login (`"/Login"`).
 * - En futuras versiones, enviará una petición `POST` para agregar el curso
 *   a la lista de favoritos del usuario autenticado.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el botón de favoritos.
 */

export default function Heart() {
  const navigate = useNavigate();

  return (
    <div className="Heart__favorites" onClick={() => navigate("/Login")}></div>
  );
}
