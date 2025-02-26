import React, { useState } from "react";
import AllAquarelle from "../components/AllAquarelle.js"
//import inicioCreanunate from '../images/inicioCreanunate.jpg'
import "../styles/MainStarts.css";
import "../styles/Course.css";

export default function MainStarts() {

  const balls = ["Collage", "Acrílicos", "Óleo", "Acuarela"];

  const [selectedType, setSelectedType] = useState("");

  const courses = AllAquarelle(selectedType);
  console.log(courses)

  const handleBallClick = (type) => {
    setSelectedType(type); // Establece el tipo de arte seleccionado
  };

  return (
    <div className="Box_MainStarts_starts">
      {balls.map((ball, index) => {
        const customClass = `Box__MainStarts__ball--${index + 1}`;

    
        console.log(customClass);
        console.log(balls)
        
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
     
      </div>
 
  );
}
