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
      console.log("Resultado de la consulta en MySQL:", result);
      return result;
    } catch (error) {
      console.error("Error en la consulta de login:", error);
      return [];
    }
  },
  getUserFavorites: async (userId) => {
    const query = `
      SELECT f.id, f.name, f.description, f.video, f.price 
      FROM favorites f
      WHERE f.user_id = ?`;  // 🔹 Aseguramos que seleccione todos los favoritos del usuario
  
    try {
      const [result] = await connection.query(query, [userId]);
      console.log("Favoritos obtenidos:", result); // 🔹 Para verificar en consola
      return result;
    } catch (error) {
      console.error("Error al obtener los favoritos del usuario:", error);
      return [];
    }
  }
  
  
  }
  


