import React from "react";
import "../styles/TextStart.css";

export default function TextStart () {

// Al hacer click en la parabla creatividad, llamamos al Backen mediante endpoint y carga la configuración de Selenium. 
    const handleClick = async () => {
        try {
            const response = await fetch("http://localhost:3001/run-selenium");
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error("Error al ejecutar Selenium:", error);
        }
    };

    return (
        <div className="Container__text">

            <div className="Container__text_1 text">
                <p className="Container__text_p">Un día me preguntaron.
                Qué es la <span onClick={handleClick} style={{ cursor: "pointer", textDecoration: "underline" }}>creatividad</span></p>
                
            </div>
            <div className="Container__text_2 text">
                <p className="Container__text_p">No supe qué decir...</p>
            </div>
            <div className="Container__text_3 text">
                <p className="Container__text_p">Hoy diría que es la liberación de tu mente, la capacidad de hacer aquello que creías no ser capaz sin ser juzgado por ti mism@, ni por los demás.</p>
            </div>
            <div className="Container__text_4 text">
                <p className="Container__text_p">Liberate!</p>
            </div>

        </div>
    )
}