import React, { useState } from "react";
import useNextCourses from "../utils/useNextCourses";
import Heart from "./Heart";


export default function NextCourses() {

    //Creo un estado donde le doy el valor de falso
    const [showCourse, setShowCourse] = useState(false);
    //nectCourse, trae los cursos del fetch al endpoin desde UseNextCourses
    const nextCourse = useNextCourses();
    console.log(nextCourse);

    const handleBallClick = () => {
        setShowCourse(!showCourse);  // Le dice que si el valor de showCourse es distinto al que se le da al inicio lo cambie cada vez que haga click
    };

    return (

        <div className="Courses_container">
            <div className="Box__h1">
                {/* damos click al párrafo y trae los cursos desde la función, como  está en false no se ven, pero al hacer clic cambia el estado y los muestra */}
                <p onClick={() => { handleBallClick(showCourse) }}>PRóXIMOS CURSOS</p>
            </div>
            {/*renderizado condicional */}
            {showCourse && nextCourse.length > 0 && nextCourse.map((course, index) => (
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
    );
}