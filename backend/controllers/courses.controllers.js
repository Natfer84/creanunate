
import mongo from '../databases/mongo.connection.js'
import genericMongoCrud from '../models/crudMongo/generic.crud.js'
import dotenv from 'dotenv'


export default {

    // Enpoint en funcionamiento
     /**
     * @swagger
     * /courses:
     *   get:
     *     summary: Obtiene todos los cursos
     *     tags: [Cursos]
     *     responses:
     *       200:
     *         description: Lista de cursos obtenida con éxito
     */
    allCourses: async (req, res) => {
        try {
            const result = await genericMongoCrud.getAll(process.env.COLL_COURSES)
            res.json(result)

        } finally {
            await mongo.closeClient()
        }
    },
    // Enpoint en funcionamiento
    /**
     * @swagger
     * /courses/type/{type}:
     *   get:
     *     summary: Obtiene los cursos por tipo
     *     tags: [Cursos]
     *     parameters:
     *       - in: path
     *         name: type
     *         required: true
     *         schema:
     *           type: string
     *         description: Tipo de curso (ejemplo "acuarela)
     *     responses:
     *       200:
     *         description: Lista de cursos del tipo especificado
     */
    allCoursesTypeStart: async (req, res) =>{
        try{
            const { type } = req.params;
            const result = await genericMongoCrud.getOne(process.env.COLL_COURSES, {type});
            res.json(result)
        } finally {
            await mongo.closeClient()
        }
    },

    // Endpoint reservado para la versión 2
    /**
     * @swagger
     * /courses/favorites:
     *   post:
     *     summary: Selecciona un curso como favorito
     *     tags: [Cursos]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               id:
     *                 type: string
     *                 example: "12345"
     *     responses:
     *       200:
     *         description: Curso marcado como favorito con éxito
     *       400:
     *         description: Error, ID del curso no encontrada
     */
  oneCoursesFavorites: async (req, res) => {

        try {
            //Conformamos los datos de la solicitud
            const values = ['id', req.body.id];
            console.log(values);
            const course = await genericMongoCrud.newOne(process.env.COLL_COURSES);
            console.log(course);

            if(course.length === 0){
                res.status(400).json({message: 'No existe un curso con la ID introducida'})
            } else {
                const customResponse = {
                    code: course[0].code,
                    name: course[0].name,
                    start_date: course[0].start_date,
                    end_date: course[0].end_date,
                    cover: course[0].cover
                }
    
                res.status(200).json(customResponse);
            }

        } catch (e) {
            res.status(400).json({ mesagge: 'Error inesperado al obtener los datos del curso', error: e })
        }
    },

    // Enpoint en funcionamiento
       /**
     * @swagger
     * /courses/next:
     *   get:
     *     summary: Obtiene los próximos cursos
     *     tags: [Cursos]
     *     responses:
     *       200:
     *         description: Lista de próximos cursos obtenida con éxito
     */
    nextCourses: async (req, res) => {
        try {
            const result = await genericMongoCrud.getAll(process.env.COLL_NEXCOURSES)
            res.json(result)

        } finally {
            await mongo.closeClient()
        }
    },


   
}