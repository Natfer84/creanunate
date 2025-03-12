import React from "react";
import "../styles/TextStart.css";

/**
 * Componente funcional que muestra un texto sobre creatividad.
 * Al hacer clic en la palabra "creatividad", se realiza una llamada a un endpoint en el backend
 * que ejecuta una configuración de Selenium.
 * 
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el texto interactivo.
 */

export default function TextStart () {
    /**
     * Maneja el evento de clic en la palabra "creatividad".
     * Envía una solicitud al backend para ejecutar Selenium.
     * 
     * @async
     * @function handleClick
     */


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