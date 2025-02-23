import React from "react";
//import inicioCreanunate from '../images/inicioCreanunate.jpg'
import "../styles/MainStarts.css";

export default function MainStarts() {

  const balls = ["Collage", "Acrílicos", "Óleo", "Acuarela"];

  return (
    <div className="Box_MainStarts_starts">
      {balls.map((ball, index) => {
        const customClass = `Box__MainStarts__ball--${index + 1}`;
        
        return (
          <div key={index} className={`Box__MainStarts__ball ${customClass}`}>
            <div className="Box__MainStarts__ball__div">{ball}</div>
          </div>
        );
      })}
    </div>
  );
}
