import mongo from '../../databases/mongo.connection.js';
import dotenv from 'dotenv';
dotenv.config();

const client = await mongo.connectToMongo();

//getAll trae todos los cursos actuales en la page de Courses, de la ruta:allCourses
export default {
    getAll: async(coll) => {
        const db = client.db(process.env.MONGO_BBDD)
        const collection = db.collection(coll)
        const result = await collection.find({}).toArray() // este collection.find({}) trae todos los cursos
        return result;
    },
    //getOne trae los cursos por type:acuarela en inicio (en las bolas) de la ruta: allCoursesTypeStart
    getOne: async(coll, data) => { //data en el caso del filtro por type tiene {type: acuarela}
        const db = client.db(process.env.MONGO_BBDD)
        const collection = db.collection(coll)
        const result = await collection.find(data).toArray()
        return result;
    },
    
    newOne: async(coll, values) => {
        const db = client.db(process.env.MONGO_BBDD)
        const collection = db.collection(coll)
        const result = await collection.insertOne(values)
        return result;
    } 
}