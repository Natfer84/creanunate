

import mongo from '../databases/mongo.connection.js';

const client = await mongo.connectToMongo();
const close = await mongo.closeClient();

const mydb = 'trainingpro';

/* --------- CRUD -----------*/
export default {

    getAll: async (collectionName) => {
        let result={};
        try {
            const db = client.db(mydb);
            const collection = db.collection(collectionName);
            result = await collection.find({}).toArray();
        } finally {
            //close();
        }

        return result;
    },

    postComms: async (collectionName, data) => {
        let result={};
		try {
			const db = client.db(mydb);
			const collection = db.collection(collectionName);
			result = await collection.insertOne(data);
            console.log(result)
		} finally {
			/* close() */
		}
    
        return result;
	},

    lopdGet: async (collectionName) => {
        let result={};
		try {
			const db = client.db(mydb);
			const collection = db.collection(collectionName);
			result = await collection.find({}).toArray();
		} finally {
			/* close() */
		}

        return result;
	}
}