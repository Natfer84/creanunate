import Heart from "./Heart.js";
import { useCourses } from "../context/CoursesContext.js"; // Importamos el contexto
import NextCourses from "./NextCourses.js";


import "../styles/Course.css";

export default function CoursesContx() {
  const { courses, loading, error } = useCourses();

  if (loading) return <p>Cargando cursos...</p>;
  if (error) return <p>Error al cargar cursos: {error}</p>;
  if (courses.length === 0) return <p>No hay cursos disponibles</p>;

  return (
    <div className="Courses_container">
      
      <div className="Container__Courses__box" style={{ position: 'relative' }}>
        {courses.map((course, index) => (
          <div key={index} className="Courses__box">
            <div className="Courses__box__video">
              <iframe
                src={`https://www.youtube.com/embed/${course.video.split("v=")[1]}`}
                title={`Video de YouTube: ${course.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h2 className="Courses__box__name">{course.name}</h2>

            <p className="Courses__box__description">{course.description}</p>
            <div className="Courses__box__price_favorites">
              <div className="Courses__box__price">{course.price}</div>
              <div className="Courses__box__favorites">
                <Heart />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="Container__NextCourses">
        <NextCourses />
      </div>
    </div>
  );
}
