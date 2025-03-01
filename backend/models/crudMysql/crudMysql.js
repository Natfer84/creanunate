import mysql from "../../databases/mysql.connection.js";
import dotenv from 'dotenv';
dotenv.config();

const connection = await mysql.mySQLConnection();

export default {
  getFavorites: async (values) => {
    const query = "SELECT * FROM ??";
    const [result] = await connection.query(query, [...values]);
    return result;
  },
  oneCoursesFavorites: async(values) => {
    const query ="SELECT * FROM ?? WHERE?? = ?";
    const [result] = await connection.query(query,[...values]);
    return result;
  }

  login: async (values) => {
    const query = 'SELECT ??, ??, ??, ?? FROM ?? WHERE ?? = ? AND ?? = ? AND (?? = ? OR ?? = ?)'
    const result = await connection.query(query, [...values])
    return result;
},

};
