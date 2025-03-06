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
    const query = 'SELECT id, username, password FROM login WHERE username = ? AND password = ?';
    try {
      const [result] = await connection.query(query, values);
      console.log("Resultado de la consulta en MySQL:", result);/// entran aqui los favoritos
      return result;
    } catch (error) {
      console.error("Error en la consulta de login:", error);
      return [];
    }
  },
  getUserFavorites: async (id) => {
    console.log("Davinia: ", id); /// entran aqui los favoritos
   /* const query = `SELECT * FROM favorites WHERE fk_id_login = ?`;  
    try {
      const [result] = await connection.query(query, [id]);
      console.log("Favoritos obtenidOOOOOOOOOOOOs:", result); /// entran aqui los favoritos
      return result;
    } catch (error) {
      console.error("Error al obtener los favoritos del usuario:", error);
      return {A:'a'};
    }*/
  }
  
  
  }
  


