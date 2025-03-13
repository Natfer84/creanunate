import mysql from "../../databases/mysql.connection.js";

import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.mySQLConnection();

export default {
  getFavorites: async (values) => {
    const query = "SELECT * FROM ??";
    const [result] = await connection.query(query, [...values]);
    return result;
  },

  oneCoursesFavorites: async (values) => {
    const query = "SELECT * FROM ?? WHERE ?? = ?";
    const [result] = await connection.query(query, [...values]);
    return result;
  },

  login: async (values) => {
    const query =
      "SELECT id, username, password FROM login WHERE username = ? AND password = ?";
    try {
      const [result] = await connection.query(query, values);
      return result;
    } catch (error) {
      return [];
    }
  },
  getUserFavorites: async (username) => {
    console.log("Davinia CrudMysql: ", username); /// entran aqui los favoritos  //// TENGO QUE CAMBIAR LA QUERY
    const query = `SELECT * FROM favorites WHERE fk_id_login = (SELECT id FROM login WHERE username = ?)`;
    try {
      const [result] = await connection.query(query, [username]);
      return result;
    } catch (error) {
      return [];
    }
  },
};
