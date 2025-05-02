import { useState, useEffect } from "react";

//jsdoc src/utils/useNextCourses.js -d out   

/**
 * Hook personalizado para obtener los próximos cursos.
 * @returns {Array} Lista de cursos obtenida desde la API.
 * REACT_APP_API_URL = URL A RAILWAY
 */
export default function useNextCourses() {

    const [nextCourses, setNextCourses] = useState([]);

    useEffect(() => {
        /**
         * Obtiene los próximos cursos de la API.
         */
        const fetchNextCourses = async () => {

            try {
                const response = await fetch(
                    //"http://MONGO_URL/creanunate/nextCourses/next-courses" 
                     "http://localhost:3001/creanunate/nextCourses/next-courses"
                );
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setNextCourses(data);
            } else {
                    console.log("Error en la respuesta del servidor:", response.status);
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };

        fetchNextCourses();
    }, []);
    return nextCourses;
}