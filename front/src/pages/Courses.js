import React, { useEffect, useState } from 'react';

export default function Inicio() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/courses")
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error("Error al obtener los cursos:", error));
    }, []);

    return (
        <div className='Inicio_box'>
            <h2>Cursos Disponibles</h2>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>
                        <h3>{course.titulo}</h3>
                        <p>{course.descripcion}</p>
                        <a href={course.url} target="_blank" rel="noopener noreferrer">Ver Curso</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
