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

// Endpoint funcionando
//Courses
/**
 * @swagger
 * /creanunate/courses/all-courses:
 *   get:
 *     summary: Obtiene todos los cursos disponibles.
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Curso de Node.js"
 *                   description:
 *                     type: string
 *                     example: "Aprende Node.js desde cero"
 *                   start_date:
 *                     type: string
 *                     format: date
 *                     example: "2024-05-01"
 *                   end_date:
 *                     type: string
 *                     format: date
 *                     example: "2024-06-01"
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/creanunate/courses/all-courses', courses.allCourses);


// Endpoint funcionando
// NextCourses
/**
 * @swagger
 * /creanunate/nextCourses/next-courses:
 *   get:
 *     summary: Obtiene la lista de los próximos cursos disponibles.
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de próximos cursos obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Curso avanzado de JavaScript"
 *                   description:
 *                     type: string
 *                     example: "Aprende JavaScript moderno con proyectos reales."
 *                   start_date:
 *                     type: string
 *                     format: date
 *                     example: "2024-07-01"
 *                   end_date:
 *                     type: string
 *                     format: date
 *                     example: "2024-08-01"
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/creanunate/nextCourses/next-courses', nextCourses.nextCourses);

/// Endpoint para la verión 2
//obtener un curso para llevarlo a mysql favoritos
//router.post('/creanunate/coursesOne/get-One', coursesOne.getOne)


// Endpoint funcionando
// Start
//Seleccionar cursos segun el tipo de curso que sea en inicio
/**
 * @swagger
 * /creanunate/courses/{type}:
 *   get:
 *     summary: Obtiene todos los cursos de un tipo específico
 *     tags: 
 *       - Cursos
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *         description: Tipo de curso a consultar (ej. "acuarela", "óleo", "collage")
 *     responses:
 *       200:
 *         description: Lista de cursos obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cursos obtenidos correctamente"
 *                 courses:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Curso de JavaScript"
 *                       type:
 *                         type: string
 *                         example: "acuarela"
 *       400:
 *         description: Parámetro "type" no proporcionado o inválido.
 *       404:
 *         description: No se encontraron cursos de ese tipo.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/creanunate/courses/:type', coursesTypeStart.allCoursesTypeStart);



// MySQL

/// Endpoint para la verión 2
// Enviar un curso a favoritos mediante id
router.post('/creanunate/courses/one-favorites', oneCoursesFavorites.oneCoursesFavorites);


// Endpoint funcionando
//loginControllers contiene login y getUserFavorites
//hace login y verifica los datos del login
/**
 * @swagger
 * /creanunate/login/login:
 *   post:
 *     summary: Inicia sesión y devuelve un token JWT.
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "juan123"
 *               password:
 *                 type: string
 *                 example: "claveSegura1"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login exitoso"
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     username:
 *                       type: string
 *                       example: "juan123"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIs..."
 *       400:
 *         description: Faltan datos obligatorios.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/creanunate/login/login', loginControllers.login);


// Endpoint funcionando
// Envia los cursos favoritos de cada cliente a su área cliente
/**
 * @swagger
 * /creanunate/login/login:
 *   post:
 *     summary: Inicia sesión y devuelve un token JWT.
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "juan123"
 *               password:
 *                 type: string
 *                 example: "claveSegura1"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login exitoso"
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     username:
 *                       type: string
 *                       example: "juan123"
 *                 favorites:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 10
 *                       course:
 *                         type: string
 *                         example: "Curso de Node.js"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIs..."
 *       400:
 *         description: Faltan datos obligatorios.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/creanunate/login/login', loginControllers.login);
//Ver los cursos en favoritos dentro del área cliente


/// Endpoint para la verión 2
//router.get('/creanunate/courses/get-user-favorites', loginControllers.getUserFavorites);
router.get('/favorites',loginControllers.getUserFavorites);

export { router };