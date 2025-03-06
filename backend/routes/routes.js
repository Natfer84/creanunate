import { Router } from 'express';
import courses from '../controllers/courses.controllers.js';
import nextCourses from '../controllers/courses.controllers.js';
//import getUserFavorites from "../controllers/login.controllers.js";
import oneCoursesFavorites from "../controllers/courses.controllers.js"
import coursesTypeStart from "../controllers/courses.controllers.js"
import loginControllers from '../controllers/login.controllers.js';


//import coursesOne from '../controllers/courses.controllers.js'

const router = Router();

// BBDD MongoDB
//Courses
//router.get('/creanunate/courses/all-courses', courses.allCourses);
router.get('/creanunate/courses/all-courses', courses.allCourses);
router.get('/creanunate/nextCourses/next-courses', nextCourses.nextCourses);

//obtener un curso para llevarlo a mysql favoritos
//router.post('/creanunate/coursesOne/get-One', coursesOne.getOne)

//Seleccionar cursos segun el tipo de curso que sea en inicio
router.get('/creanunate/courses/:type', coursesTypeStart.allCoursesTypeStart);

//MySQL
//Enviar un curso a favoritos mediante id
router.post('/creanunate/courses/one-favorites', oneCoursesFavorites.oneCoursesFavorites);

//loginControllers contiene login y getUserFavorites
//hacer login
router.post('/creanunate/login/login', loginControllers.login);
//Ver los cursos en favoritos dentro del área cliente
//router.get('/creanunate/courses/get-user-favorites', loginControllers.getUserFavorites);
router.get('/favorites',loginControllers.getUserFavorites);
export { router };