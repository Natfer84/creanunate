import { Router } from 'express';
import courses from '../controllers/courses.controllers.js';

const router = Router();

// BBDD MongoDB
//Courses
//router.get('/creanunate/courses/all-courses', courses.allCourses);
router.get('/creanunate/courses/next-courses', courses.allCourses);

export { router };