
import Heart from "../components/Heart";
import useAllAquarelle from "../utils/useAllAquarelle.js"
import "../styles/Course.css";


export default function AllAquarelle() {

    const courses = useAllAquarelle();
  
  return (
    <div className="Courses_container">
      {courses.map((course, index) => (
        <div key={index} className="Courses__box">
          <div className="Courses__box__video">
            <iframe
              src={`https://www.youtube.com/embed/${
                course.video.split("v=")[1]
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