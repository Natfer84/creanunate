import mysql from "../../databases/mysql.connection.js";

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
};
