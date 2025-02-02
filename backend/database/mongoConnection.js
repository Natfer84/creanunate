import { MongoClient } from 'mongodb'

const mydb = "creanunate";

const url = "mongodb://localhost:27017/creanunate"

export default {

    connectToMongo: async () => {
      const client = new MongoClient(url)
      await client.connect()
  
      return client
    },
  
    closeClient: async () => {
      const client = new MongoClient(url)
      await client.close()
  
      return client
    }
  }