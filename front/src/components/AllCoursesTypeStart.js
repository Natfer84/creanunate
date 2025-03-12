import React, { useState } from "react";
import useAllCoursesTypeStart from "../utils/useAllCoursesTypeStart.js";
import Heart from "./Heart.js";
import TextStart from "./TextStart.js";
import "../styles/MainStarts.css";
import "../styles/Course.css";
import "../styles/AllCoursesTypeStart.css";

/**
 * Componente que muestra diferentes tipos de cursos de arte y permite filtrarlos por categoría.
 *
 * - Presenta una serie de categorías (`balls`) que el usuario puede seleccionar.
 * - Al hacer clic en una categoría, se muestran los cursos correspondientes.
 * - Si se hace clic en la misma categoría, se ocultan los cursos.
 * - Utiliza el **custom hook `useAllCoursesTypeStart`** para obtener los cursos según la selección.
 * - Muestra los cursos con su **video, nombre, descripción y precio**.
 * - Incluye el botón de **favoritos (`Heart`)**.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la lista de cursos filtrados por tipo.
 */

export default function AllCoursesTypeStart() {
  /**
   * Lista de tipos de cursos disponibles.
   * @type {Array<string>}
   */

  const balls = ["Collage", "Acrílicos", "Óleo", "Acuarela"];

  /**
   * Estado que almacena el tipo de curso seleccionado.
   * @type {[string|null, Function]}
   */

  const [selectedType, setSelectedType] = useState(null);
  /**
   * Estado que controla si los cursos deben mostrarse o no.
   * @type {[boolean, Function]}
   */
  const [showCourses, setShowCourses] = useState(false);
  /**
   * Obtiene los cursos filtrados según el tipo seleccionado.
   * @type {Array<Object>}
   */

  const courses = useAllCoursesTypeStart(selectedType);
  /**
   * Maneja el evento de clic en una categoría de curso.
   *
   * - Si el usuario hace clic en la misma categoría, oculta los cursos.
   * - Si selecciona una nueva categoría, muestra los cursos correspondientes.
   *
   * @param {string} type - Tipo de curso seleccionado.
   */

  const handleBallClick = (type) => {
    if (selectedType === type) {
      setSelectedType(null);
      setShowCourses(false);
    } else {
      setSelectedType(type);
      setShowCourses(true);
    }
  };

  return (
    <div className="Box_MainStarts_starts">
      {/* Componente de introducción */}
      <TextStart />

      {/* Renderiza las categorías de cursos como botones */}
      {balls.map((ball, index) => {
        const customClass = `Box__MainStarts__ball--${index + 1}`; // Clase dinámica para cada bola

        return (
          <div
            key={index}
            className={`Box__MainStarts__ball ${customClass}`}
            onClick={() => handleBallClick(ball.toLowerCase())} // Convierte el tipo a minúsculas antes de enviarlo
          >
            <div className="Box__MainStarts__ball__div">{ball}</div>
          </div>
        );
      })}
      {/* Renderiza los cursos si hay una categoría seleccionada */}
      <div className="Courses_container_AllCoursesTypeStart">
        {showCourses &&
          selectedType &&
          courses.map((course, index) => (
            <div key={index} className="Courses__box">
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
              {/* Detalles del curso */}
              <h2 className="Courses__box__name">{course.name}</h2>
              <p className="Courses__box__description">{course.description}</p>
              <div className="Courses__box__price">{course.price}</div>

              {/* Botón de favoritos */}
              <div className="Courses__box__favorites">
                <Heart />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
