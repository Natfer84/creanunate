import mongo from "../databases/mongo.connection.js";
import dotenv from "dotenv";
dotenv.config();

const client = await mongo.connectToMongo();

const mydb = "cranunate";

/* --------- CRUD -----------*/
export default {
  getAll: async (collectionName) => {
    let result = {};
    try {
      const db = client.db(process.env.MONGO_BBDD);
      const collection = db.collection(collectionName);
      result = await collection.find({}).toArray();
    } finally {
      await mongo.closeClient();
    }
    return result;
  },

  /*postComms: async (collectionName, data) => {
        let result={};
		try {
			const db = client.db(mydb);
			const collection = db.collection(collectionName);
			result = await collection.insertOne(data);
            console.log(result)
		} finally {
			 await mongo.closeClient()
		}
        return result;
	},
    */
  /*
    lopdGet: async (collectionName) => {
        let result={};
		try {
			const db = client.db(mydb);
			const collection = db.collection(collectionName);
			result = await collection.find({}).toArray();
		} finally {
            await mongo.closeClient()
		}

        return result;
	}
     */
};
