import React from "react";
import Courses from "../components/Courses.js";
/**
 * Componente que representa la página de cursos.
 *
 * - Renderiza el componente `Courses`, que muestra la lista de cursos disponibles.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la pantalla de cursos.
 */

export default function Course() {
  return (
    <div>
      <Courses />
    </div>
  );
}
