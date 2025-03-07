import { createContext, useContext, useEffect, useState } from "react";

// 1. Crear el contexto
const CoursesContext = createContext();

// 2. Crear el proveedor del contexto
export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3001/creanunate/courses/all-courses");
        if (!response.ok) {
          throw new Error(`Error en la respuesta del servidor: ${response.status}`);
        }
        const data = await response.json();
        console.log("Cursos obtenidos:", data);
        setCourses(data);
      } catch (err) {
        console.error("Error en la solicitud:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <CoursesContext.Provider value={{ courses, loading, error }}>
      {children}
    </CoursesContext.Provider>
  );
};

// 3. Custom Hook para consumir el contexto
export const useCourses = () => {
  return useContext(CoursesContext);
};
