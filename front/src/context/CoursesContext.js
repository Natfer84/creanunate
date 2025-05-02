import { createContext, useContext, useEffect, useState } from "react";
/**
 * Contexto para gestionar la lista de cursos y su estado de carga.
 * @constant {React.Context}
 */

const CoursesContext = createContext();
/**
 * Proveedor de contexto para los cursos.
 *
 * @param {Object} props - Propiedades del proveedor.
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto.
 *
 * @returns {JSX.Element} Proveedor de contexto con los cursos.
 *
 * @example
 * <CoursesProvider>
 *   <MyComponent />
 * </CoursesProvider>
 */

export const CoursesProvider = ({ children }) => {
  /**
   * Estado que almacena la lista de cursos obtenidos desde la API.
   * @type {Array<Object>}
   */
  const [courses, setCourses] = useState([]);
  /**
   * Estado que indica si los cursos aún se están cargando.
   * @type {boolean}
   */
  const [loading, setLoading] = useState(true);
  /**
   * Estado para manejar errores en la obtención de cursos.
   * @type {string|null}
   */
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Función asíncrona para obtener los cursos desde la API.
     * Realiza una petición GET a `http://localhost:3001/creanunate/courses/all-courses`.
     *
     * @async
     * @function fetchCourses
     * @throws {Error} Si la petición al backend falla.
     * REACT_APP_API_URL
     */
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/creanunate/courses/all-courses"
        );
        if (!response.ok) {
          throw new Error(
            `Error en la respuesta del servidor: ${response.status}`
          );
        }
        const data = await response.json();

        setCourses(data);
      } catch (err) {
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
/**
 * Hook personalizado para acceder al contexto de los cursos.
 *
 * @returns {{ courses: Array<Object>, loading: boolean, error: string|null }}
 * Un objeto con la lista de cursos, el estado de carga y posibles errores.
 *
 * @example
 * const { courses, loading, error } = useCourses();
 */

export const useCourses = () => {
  return useContext(CoursesContext);
};
