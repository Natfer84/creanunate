
import mongo from '../database/mongoConnection.js'

const client = await mongo.connectToMongo()
// const close = await mongo.closeClient()

const mydb = 'creanunate'

export default {

      allCourses: async (req, res) => {

        try {
            const db = client.db(mydb)
            const collection = db.collection('courses')
            const result = await collection.find({}).toArray()

            res.json(result)

        } finally {
        //close()
        //console.log('supuesto cierre de BBDD')
        await mongo.closeClient()
        }
    }
}