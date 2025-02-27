import React, { useState } from "react";
import useAllCoursesTypeStart from "../utils/useAllCoursesTypeStart.js"
import Heart from "./Heart.js";
import "../styles/MainStarts.css";
import "../styles/Course.css";
import "../styles/AllCoursesTypeStart.css";

export default function AllCoursesTypeStart() {

  const balls = ["Collage", "Acrílicos", "Óleo", "Acuarela"];

  const [selectedType, setSelectedType] = useState("");

  const courses = useAllCoursesTypeStart(selectedType);
  console.log(courses)

  const handleBallClick = (type) => {
    setSelectedType(type); // Establece el tipo de arte seleccionado
  };

  return (
    <div className="Box_MainStarts_starts">
      {balls.map((ball, index) => {
        const customClass = `Box__MainStarts__ball--${index + 1}`;

        return (
          <div key={index}
            className={`Box__MainStarts__ball ${customClass}`}
            onClick={() => handleBallClick(ball.toLowerCase())} // Llama a handleBallClick con el tipo en minúsculas
          >
            <div className="Box__MainStarts__ball__div">{ball}
            </div>
          </div>
        );
      })}

      <div className="Courses_container_AllCoursesTypeStart">
        {courses.map((course, index) => (
          <div key={index} className="Courses__box">
            <div className="Courses__box__video">
              <iframe
                src={`https://www.youtube.com/embed/${course.video.split("v=")[1]
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
    </div>
  );
}
