import { useState, useEffect } from "react";
/**
 * Hook personalizado para obtener la lista de cursos desde la API.
 * 
 * @returns {Array<Object>} Un array de objetos, donde cada objeto representa un curso.
 * 
 * @example
 * const courses = useCourses();
 * console.log(courses); // [{ id: 1, name: "React Básico" }, { id: 2, name: "Node.js Avanzado" }]
 */

export default function useCourses () {
  /** 
   * Estado que almacena la lista de cursos obtenidos de la API.
   * @type {Array<Object>}
   */

  const [courses, setCourses] = useState([]);

  useEffect(()=> {
    /**
     * Función asíncrona para obtener los cursos desde la API.
     * Realiza una petición GET a `http://localhost:3001/creanunate/courses/all-courses`.
     * 
     * @async
     * @function fetchCourses
     * @throws {Error} Si la petición al backend falla.
     * * REACT_APP_API_URL = URL A RAILWAY
     */
         const fetchCourses = async () => {
  
    try {
      const response = await fetch(
       "http://REACT_APP_API_URL/creanunate/courses/all-courses"  //"http://localhost:3001/creanunate/courses/all-courses"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCourses(data);

      } else {
        console.error("Error en la respuesta del servidor:", response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  fetchCourses();
 },[]);
 return courses;
}