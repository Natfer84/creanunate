import crudMysql from "../models/crudMysql/crudMysql.js";
import { Link } from "react-router-dom";
import dotenv from "dotenv";

export default {
  // Función para manejar el inicio de sesión
  login: async (req, res) => {
    try {
      const { username, password } = req.body; // Recoge los datos del body.
      console.log("Datos recibidos en el backend:", req.body);

      //Primero que no estén vacíos
      if (!username || !password) {
        console.log("Error: Faltan datos obligatorios");
        return res.status(400).json({ message: "Faltan datos obligatorios" });
      }


      //SELECT username, password FROM login where username = 'juan123' AND password = "claveSegura1";
      const values = [username, password];
      console.log("datos de value", values);

      const existsCustomer = await crudMysql.login(values); //aquí no entra
      console.log("Consultando en la base de datos...", existsCustomer);  //////////////////// entran aqui los favoritos

      if (existsCustomer && existsCustomer.length > 0) {
        ///ESTOY MODIFICANDO ESTO///////////////////////

        const user = existsCustomer[0];
        const userFavorites = await crudMysql.getUserFavorites(user.id);
        
         return res
          .status(200)
          .json({ 
            message: "Login exitoso",
            user: user,  // Ahora se devuelve el id
            favorites: userFavorites || []
           });
     
      //////////////////////////////////////////////////////////////////////////////

      } else  {
         //Esto no funciona
         return res.status(404).json({ error: "El usuario no existe"});
      }
    } catch (error) {
      console.error("Error al hacer login:", error);
      res.status(500).json({ message: "Error al hacer login", error });
    }

  },
 
  getUserFavorites: async (req, res) => {
    try {
      const { username } = req.query;
      console.log(username);
  
      if (!username) {
        return res.status(400).json({ message: "Falta el nombre de usuario" });
      }
  
      // Obtiene el ID del usuario
      const user = await crudMysql.getUserFavorites(username);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // obtiene los favoritos
      //const userFavorites = await crudMysql.getUserFavorites(user.id);
  
      return res.status(200).json({
        message: "Favoritos obtenidos correctamente",
        favorites: userFavorites || []
      });
  
    } catch (error) {
      console.error("Error al obtener los favoritos:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
  
  };
  



