import { useState, useEffect } from "react";

export default function useNextCourses() {

    const [nextCourses, setNextCourses] = useState([]);

    useEffect(() => {

        const fetchNextCourses = async () => {

            try {
                const response = await fetch(
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