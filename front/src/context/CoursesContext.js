import { createContext, useContext, useEffect, useState } from "react";


const CoursesContext = createContext();


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


export const useCourses = () => {
  return useContext(CoursesContext);
};
