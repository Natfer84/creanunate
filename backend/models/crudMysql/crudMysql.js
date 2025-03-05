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

  oneCoursesFavorites: async (values) => {
    const query = "SELECT * FROM ?? WHERE ?? = ?";
    const [result] = await connection.query(query, [...values]);
    return result;
  },

  login: async (values) => {
    const query = 'SELECT username, password FROM login WHERE username = ? AND password = ?';
    try {
      const [result] = await connection.query(query, values);
      console.log("Resultado de la consulta en MySQL:", result);
      return result;
    } catch (error) {
      console.error("Error en la consulta de login:", error);
      return null;
    }
  },
/*
  getUserFavorites: async (id) => {
    const query = 'SELECT * FROM favorites WHERE id = ?';
    try {
      const [result] = await connection.query(query, [id]);
      console.log("Cursos favoritos encontrados: ", result);
      return result;
    } catch (error) {
      console.log("Error al obtener los favoritos: ", error);
      return [];
    }
  },
*/

};
