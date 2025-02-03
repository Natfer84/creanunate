import React, { useState } from 'react';
//import Courses from "../styles/Courses.css";

const Courses = () => {

  const [courses, setCourses] = useState([]);

      const fetchCourses = async () => {
          try {
              const response = await fetch('http://localhost:3000/creanunate/courses/all-courses');
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
      <div className="Courses">
          {courses.map((course, index) => (
              <div key={index} className="Courses__course">
                  <h2 className="Courses__name">{course.name}</h2>
              
                  <p className="Courses__code">{course.description}</p>
              </div>
          ))}
      </div>
  );
};

export default Courses;
