
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
    nextCourses: async (req, res) => {
        try {
            const result = await genericMongoCrud.getAll(process.env.COLL_NEXCOURSES)
            res.json(result)

        } finally {
            await mongo.closeClient()
        }
    }
}