import { Router } from 'express';
import courses from '../controllers/courses.controllers.js';
import nextCourses from '../controllers/courses.controllers.js';


const router = Router();

// BBDD MongoDB
//Courses
//router.get('/creanunate/courses/all-courses', courses.allCourses);
router.get('/cranunate/courses/all-courses', courses.allCourses);
router.get('/cranunate/nextCourses/next-courses', nextCourses.nextCourses);

export { router };