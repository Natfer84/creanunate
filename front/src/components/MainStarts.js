import AllCoursesTypeStart from "../components/AllCoursesTypeStart.js";
import "../styles/MainStarts.css";
import "../styles/Course.css";

/**
 * Componente principal que renderiza la sección de inicio de los cursos.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la pantalla de inicio con los cursos.
 */

export default function MainStarts() {
  return (
    <div>
      {/* Renderiza el componente AllCoursesTypeStart, que muestra los cursos disponibles */}
      <AllCoursesTypeStart />
    </div>
  );
}
