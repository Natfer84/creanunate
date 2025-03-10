import crudMysql from "../models/crudMysql/crudMysql.js";
import jwt from "jsonwebtoken";

//import bcrypt from "bcryptjs";


const SECRET_KEY = process.env.SECRET_KEY || "miClaveSuperSecreta"; // Clave para firmar el JWT


export default {

  /**
   * @swagger
   * /login:
   *   post:
   *     summary: Inicia sesión y devuelve un token JWT.
   *     tags: [Autenticación]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *                 example: "juan123"
   *               password:
   *                 type: string
   *                 example: "claveSegura1"
   *     responses:
   *       200:
   *         description: Inicio de sesión exitoso.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: "Login exitoso"
   *                 user:
   *                   type: object
   *                   properties:
   *                     id:
   *                       type: integer
   *                       example: 1
   *                     username:
   *                       type: string
   *                       example: "juan123"
   *                 favorites:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       id:
   *                         type: integer
   *                         example: 10
   *                       course:
   *                         type: string
   *                         example: "Curso de Node.js"
   *                 token:
   *                   type: string
   *                   example: "eyJhbGciOiJIUzI1NiIs..."
   *       400:
   *         description: Datos faltantes en la solicitud.
   *       404:
   *         description: Usuario no encontrado.
   *       500:
   *         description: Error interno del servidor.
   */
  
  login: async (req, res) => {
    try {
      const { username, password } = req.body; // Recoge los datos del body.
      console.log("Datos recibidos en el backend:", req.body);

      if (!username || !password) {
        console.log("Error: Faltan datos obligatorios");
        return res.status(400).json({ message: "Faltan datos obligatorios" });
      }


      //SELECT username, password FROM login where username = 'juan123' AND password = "claveSegura1";
      const values = [username, password];
      console.log("datos de value", values);

      const existsCustomer = await crudMysql.login(values); //aquí no entra
      console.log("Consultando en la base de datos...", existsCustomer); 

      if (existsCustomer && existsCustomer.length > 0) {

        const user = existsCustomer[0];

        const token = jwt.sign(
          { id: user.id, username: user.username },
          SECRET_KEY,
          { expiresIn: "1h" } 
        );

        const userFavorites = await crudMysql.getUserFavorites(user.id);
        
         return res
          .status(200)
          .json({ 
            message: "Login exitoso",
            user: user, 
            favorites: userFavorites || [],
            token, 
            user: {
              id: user.id,
              username: user.username
           }});
      } else  {
         return res.status(404).json({ error: "El usuario no existe"});
      }
    } catch (error) {
      console.error("Error al hacer login:", error);
      res.status(500).json({ message: "Error al hacer login", error });
    }
  },

  /**
   * @swagger
   * /favorites:
   *   get:
   *     summary: Obtiene la lista de cursos favoritos de un usuario.
   *     tags: [Usuarios]
   *     parameters:
   *       - in: query
   *         name: username
   *         required: true
   *         schema:
   *           type: string
   *         description: Nombre de usuario para obtener sus favoritos.
   *     responses:
   *       200:
   *         description: Lista de favoritos obtenida correctamente.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: "Favoritos obtenidos correctamente"
   *                 favorites:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       id:
   *                         type: integer
   *                         example: 10
   *                       course:
   *                         type: string
   *                         example: "Curso de Node.js"
   *       400:
   *         description: No se proporcionó el nombre de usuario.
   *       404:
   *         description: No se encontraron favoritos para este usuario.
   *       500:
   *         description: Error interno del servidor.
   */
 
  getUserFavorites: async (req, res) => {
    try {
      const { username } = req.query;
      console.log("Buscando favoritos para:", username);
  
      if (!username) {
        return res.status(400).json({ message: "Falta el nombre de usuario" });
      }
  
      const userFavorites = await crudMysql.getUserFavorites(username);
      if(!userFavorites || userFavorites.length === 0){
        return res.status(400).json({message: "No se encontraron favoritos para este usuario"})
      }
      return res.status(200).json({
        message: "Favoritos obtenidos correctamente",
        favorites: userFavorites,
      });
    } catch (error) {
      console.error("Error al obtener los favoritos:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
  };
  



