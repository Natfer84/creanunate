
import mongo from '../databases/mongo.connection.js'
import genericMongoCrud from '../models/crudMongo/generic.crud.js'
import dotenv from 'dotenv'


export default {

   
    allCourses: async (req, res) => {
        try {
            const result = await genericMongoCrud.getAll(process.env.COLL_COURSES)
            res.json(result)

        } finally {
            await mongo.closeClient()
        }
    },
    //mirar el controlador. seleccionar un curso de favorit
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

    nextCourses: async (req, res) => {
        try {
            const result = await genericMongoCrud.getAll(process.env.COLL_NEXCOURSES)
            res.json(result)

        } finally {
            await mongo.closeClient()
        }
    }
}