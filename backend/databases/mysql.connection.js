import * as mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

// Constante para que se pueda usar conectar en local o al servidor
//const my_host = process.env.SQL_LOCALHOST;
const my_host = process.env.SQL_LOCARAILWAY;

export default {

	mySQLConnection: async () => {
		const pool = mysql.createPool({
			host: my_host,
			user: process.env.SQL_USER,
			password: process.env.SQL_PSS,
			database: process.env.SQL_BBSS,
			port: process.env.SQL_PORT,
			waitForConnections: true,
			connectionLimit: 20,
			queueLimit: 0
		})

		return pool
	}
}