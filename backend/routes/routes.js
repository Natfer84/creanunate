import { Router } from 'express';
import courses from '../controllers/courses.controllers.js';
import nextCourses from '../controllers/courses.controllers.js';
//import coursesOne from '../controllers/courses.controllers.js'

const router = Router();

// BBDD MongoDB
//Courses
//router.get('/creanunate/courses/all-courses', courses.allCourses);
router.get('/cranunate/courses/all-courses', courses.allCourses);
router.get('/cranunate/nextCourses/next-courses', nextCourses.nextCourses);
//obtener un curso para llevarlo a mysql favoritos
//router.post('/creanunate/coursesOne/get-One', coursesOne.getOne)

export { router };