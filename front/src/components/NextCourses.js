import React, { useState } from "react";
import useNextCourses from "../utils/useNextCourses.js";
import Heart from "./Heart";
import "../styles/NextCourses.css";

/**
 * Componente funcional que muestra una lista de próximos cursos.
 * Al hacer clic en "PRÓXIMOS CURSOS", se obtiene la lista de cursos desde un custom hook y se muestran dinámicamente.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la sección de próximos cursos.
 */

export default function NextCourses() {
  /**
   * Estado local para controlar la visibilidad de los cursos.
   * Inicialmente está en `false`, por lo que los cursos están ocultos.
   *
   * @type {[boolean, Function]}
   */

  const [showCourse, setShowCourse] = useState(false);
  /**
   * Custom hook que obtiene la lista de cursos desde un endpoint.
   *
   * @type {Array<Object>} Lista de cursos obtenidos desde el backend.
   */

  const nextCourse = useNextCourses();

  /**
   * Maneja el evento de clic en el título "PRÓXIMOS CURSOS".
   * Cambia el estado `showCourse`, alternando entre `true` y `false`.
   *
   * @function handleBallClick
   */
  const handleBallClick = () => {
    setShowCourse(!showCourse);
  };

  return (
    <div className="Courses_container">
      <div className="Box__h1">
        {/* Al hacer clic, se cambia el estado `showCourse`, mostrando u ocultando los cursos */}
        <p
          onClick={() => {
            handleBallClick(showCourse);
          }}
        >
          PRóXIMOS CURSOS
        </p>
      </div>
      <div className="Container__Box__NextCourses">
        {/* Renderizado condicional: si `showCourse` es true y hay cursos disponibles, se renderizan */}
        {showCourse &&
          nextCourse.length > 0 &&
          nextCourse.map((course, index) => (
            <div key={index} className="Courses__box">
              <div className="Courses__box__video">
                {/* Inserta un video de YouTube extraído de la URL del curso */}
                <iframe
                  src={`https://www.youtube.com/embed/${
                    course.video.split("v=")[1]
                  }`}
                  title={`Video de YouTube: ${course.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Muestra el nombre, descripción y precio del curso */}
              <h2 className="Courses__box__name">{course.name}</h2>
              <p className="Courses__box__description">{course.description}</p>
              <div className="Courses__box__price">{course.price}</div>
              {/* Componente Heart para marcar como favorito */}
              <div className="Courses__box__favorites">
                <Heart />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
