import Heart from "../components/Heart";
import useCourses from "../utils/useCourses.js";
import NextCourses from "./NextCourses.js";
import "../styles/Course.css";

/**
 * Componente que muestra la lista de cursos disponibles.
 *
 * - Obtiene los cursos mediante el **custom hook `useCourses`**.
 * - Renderiza cada curso con su **video, nombre, descripción y precio**.
 * - Incluye un **botón de favoritos (`Heart`)** para marcar los cursos.
 * - Muestra la sección de **próximos cursos (`NextCourses`)**.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la lista de cursos.
 */

export default function Courses() {
  /**
   * Obtiene la lista de cursos desde el custom hook `useCourses`.
   * @type {Array<Object>}
   */
  const courses = useCourses();

  return (
    <div className="Courses_container">
      <div className="Container__Courses__box">
        {/* Renderiza la lista de cursos */}
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
