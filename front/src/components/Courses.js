import React, { useState } from "react";
import Heart from "../components/Heart";
import "../styles/Course.css";


const Courses = () => {
  const [courses, setCourses] = useState([]);

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

  return (
    <div className="Courses_container">
      {courses.map((course, index) => (
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

          <h2 className="Courses__box__name">{course.name}</h2>
          <p className="Courses__box__description">{course.description}</p>
          <div className="Courses__box__price">{course.price}</div>
       <div className="Courses__box__favorites">
        <Heart />
        </div>
        </div>
  
      ))}
      
    </div>
    
  );
};

export default Courses;
