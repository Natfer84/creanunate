import { useState, useEffect } from "react";

export default function useCourses () {

  const [courses, setCourses] = useState([]);

  useEffect(()=> {
         const fetchCourses = async () => {
  
    try {
      const response = await fetch(
        "http://localhost:3001/creanunate/courses/all-courses"
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