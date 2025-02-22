import React from "react";
//import inicioCreanunate from '../images/inicioCreanunate.jpg'
import "../styles/Start.css";

export default function MainStarts() {

  const balls = ["Collage", "Acrílicos", "Óleo", "Acuarela"];

  return (
    <div className="Box_starts">
      {balls.map((ball, index) => (
        <div key={index} className="Box__ball">
          <p className="Box__ball__p">{ball}</p>
        </div>
      ))}
    </div>


  );
}
