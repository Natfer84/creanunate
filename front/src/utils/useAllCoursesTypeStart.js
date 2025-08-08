import { useState, useEffect } from "react";
//import MainStarts from "../components/MainStarts";

/**
 * Hook personalizado para obtener cursos según un tipo específico desde la API.
 * 
 * @param {string} type - El tipo de cursos a obtener. Debe coincidir con un endpoint válido en la API.
 * @returns {Array<Object>} Un array de objetos, donde cada objeto representa un curso del tipo seleccionado.
 * 
 * @example
 * const frontendCourses = useAllCoursesTypeStart("frontend");
 * console.log(frontendCourses); // [{ id: 1, name: "React Básico" }, { id: 2, name: "Vue.js" }]
 */

export default function useAllCoursesTypeStart(type) {
  /** 
   * Estado que almacena la lista de cursos obtenidos de la API según el tipo seleccionado.
   * @type {Array<Object>}
   */

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (type) {
      /**
       * Función asíncrona para obtener cursos filtrados por tipo desde la API.
       * Realiza una petición GET a `http://localhost:3001/creanunate/courses/{type}`.
       * 
       * @async
       * @function fetchCourses
       * @throws {Error} Si la petición al backend falla.
       * 
       */
      const fetchCourses = async () => {
        console.log("Tipo seleccionado:", `${process.env.REACT_APP_API_URL}/creanunate/courses/${type}` ); 
        console.log(`${process.env.REACT_APP_API_URL}`);
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/creanunate/courses/${type}` //fetch a la url de AWS
            // // type = donde pinchas en inicio
            //fetch local:`http://localhost:3001/creanunate/courses/${type}`
          );
          if (response.ok) {
            const data = await response.json();
            setCourses(data);  // Establecer los cursos obtenidos
          } else {
            console.error("Error en la respuesta del servidor:", response.status);
          }
        } catch (error) {
          console.error("Error en la solicitud:", error);
        }
      };

      fetchCourses();
    }
  }, [type]);  // Se ejecuta cada vez que cambie el tipo

  return courses;
}
