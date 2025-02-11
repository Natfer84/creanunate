import React, { useState } from 'react';
import '../styles/Course.css';
const Courses = () => {

  const [courses, setCourses] = useState([]);

      const fetchCourses = async () => {
          try {
              const response = await fetch('http://localhost:3001/creanunate/courses/all-courses');
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
                <div className="Courses__box__video">{course.video}</div>
                  <h2 className="Courses__box__name">{course.name}</h2>
                  <p className="Courses__box__description">{course.description}</p>
                  <p className="Courses__box__price">{course.price}</p>
              </div>
          ))}
      </div>
  );
};

export default Courses;
