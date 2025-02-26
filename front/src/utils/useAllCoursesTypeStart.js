import { useState, useEffect } from "react";
//import MainStarts from "../components/MainStarts";

export default function useAllCoursesTypeStart(type) {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (type) {  // Solo hacer la solicitud si se ha seleccionado un tipo
      const fetchCourses = async () => {
        console.log("Tipo seleccionado:", `http://localhost:3001/creanunate/courses/${type}` );
        try {
          const response = await fetch(
            `http://localhost:3001/creanunate/courses/${type}` 
            // // type = donde pinchas en inicio
            
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
