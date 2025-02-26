import { Router } from 'express';
import courses from '../controllers/courses.controllers.js';
import nextCourses from '../controllers/courses.controllers.js';
import coursesFavorites from "../controllers/coursesFavorites.controllers.js";
import oneCoursesFavorites from "../controllers/courses.controllers.js"
import coursesAquerelle from "../controllers/courses.controllers.js"
//import coursesOne from '../controllers/courses.controllers.js'

const router = Router();

// BBDD MongoDB
//Courses
//router.get('/creanunate/courses/all-courses', courses.allCourses);
router.get('/creanunate/courses/all-courses', courses.allCourses);
router.get('/creanunate/nextCourses/next-courses', nextCourses.nextCourses);
//obtener un curso para llevarlo a mysql favoritos
//router.post('/creanunate/coursesOne/get-One', coursesOne.getOne)

//comprobando si funciona//////////
//Seleccionar cursos segun el tipo de curso que sea en inicio
router.get('/creanunate/courses/:type', coursesAquerelle.allAquarelle);

//MySQL
//Ver los cursos en favoritos
router.get('/creanunate/courses/all-favorites', coursesFavorites.allfavorites);
//Enviar un curso a favoritos mediante id
router.post('/creanunate/courses/one-favorites', oneCoursesFavorites.oneCoursesFavorites);

export { router };