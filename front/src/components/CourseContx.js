import Heart from "./Heart.js";
import { useCourses } from "../context/CoursesContext.js"; // Importamos el contexto
import NextCourses from "./NextCourses.js";
import "../styles/Course.css";

/**
 * Componente que muestra la lista de cursos utilizando el contexto `CoursesContext`.
 *
 * - Accede a los cursos desde el **contexto `useCourses`**.
 * - Maneja los estados de **carga (`loading`)**, **error (`error`)** y **cursos vacíos**.
 * - Renderiza cada curso con su **video, nombre, descripción y precio**.
 * - Incluye un botón de **favoritos (`Heart`)** para marcar los cursos.
 * - Muestra la sección de **próximos cursos (`NextCourses`)**.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la lista de cursos.
 */

export default function CoursesContx() {
  /**
   * Obtiene los datos de los cursos desde el contexto `useCourses`.
   * @type {{ courses: Array<Object>, loading: boolean, error: string }}
   */
  const { courses, loading, error } = useCourses();
  // Muestra un mensaje mientras se cargan los cursos
  if (loading) return <p>Cargando cursos...</p>;
  // Muestra un mensaje de error si la carga falla
  if (error) return <p>Error al cargar cursos: {error}</p>;
  // Muestra un mensaje si no hay cursos disponibles
  if (courses.length === 0) return <p>No hay cursos disponibles</p>;

  return (
    <div className="Courses_container">
      <div className="Container__Courses__box" style={{ position: "relative" }}>
        {/* Renderiza la lista de cursos obtenidos del contexto */}
        {courses.map((course, index) => (
          <div key={index} className="Courses__box">
            {/* Contenedor del video del curso */}
            <div className="Courses__box__video">
              <iframe
                src={`https://www.youtube.com/embed/${
                  course.video.split("v=")[1]
                }`}
                title={`Video de YouTube: ${course.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Nombre y descripción del curso */}
            <h2 className="Courses__box__name">{course.name}</h2>
            <p className="Courses__box__description">{course.description}</p>

            {/* Contenedor del precio y botón de favoritos */}
            <div className="Courses__box__price_favorites">
              <div className="Courses__box__price">{course.price}</div>
              <div className="Courses__box__favorites">
                <Heart />
              </div>
            </div>
            
          </div>
        ))}
      </div>
      {/* Sección de próximos cursos */}
      <div className="Container__NextCourses">
        <NextCourses />
      </div>
    </div>
  );
}
