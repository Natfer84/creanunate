
import mongo from '../databases/mongo.connection.js'
import coursesCrud from '../models/crudMysql/courses.crud.js'


const client = await mongo.connectToMongo()
// const close = await mongo.closeClient()

const mydb = 'cranunate'

export default {

    // @route   GET api/courses 
    // @desc    See all the courses
    // @access  Public
    allCourses: async (req, res) => {

        try {
            const db = client.db(mydb)
            const collection = db.collection('next_courses')
            const result = await collection.find({}).toArray()

            res.json(result)

        } finally {
        //close()
        //console.log('supuesto cierre de BBDD')
        await mongo.closeClient()
        }
    },


    /*
    Ticket de Jira: KAN-93 
    Nombre: Rafa
    Fecha: 05/02/25
    Descripcion: Obtener los datos de un curso
    */
    data: async (req, res) => {

        try {
            //Conformamos los datos de la solicitud
            const values = ['next_courses', 'id', req.body.id];
            const course = await coursesCrud.getCourse(values, res);

            const customResponse = {
                code: course[0].code,
                name: course[0].name,
                start_date: course[0].start_date,
                end_date: course[0].end_date,
                cover: course[0].cover
            }

            res.status(200).json(customResponse);
        }catch(e){
            res.status(400).json({mesagge: 'Error inesperado al obtener los datos del curso', error: e})
        }
    }
}