/*import crudMysql from '../models/crudMysql/crudMysql.js'
import dotenv from 'dotenv';
dotenv.config();

//////// Controller de favoritos para la versión 2

export default {

  getUserFavorites: async (req, res) => {
    try {
     
      const userId = req.user.id; // Suponiendo que la información del usuario está en req.user.id
      // Si no estás utilizando autenticación, también puedes obtener el userId desde el body o query params, según cómo se pase

      if (!userId) {
        return res.status(400).json({ message: 'No se ha proporcionado un ID de usuario válido' });
      }

      // Llamamos al modelo para obtener los cursos favoritos del usuario
      const favorites = await crudMysql.getUserFavorites(id);

      // Verificamos si se han encontrado favoritos
      if (favorites && favorites.length > 0) {
        return res.status(200).json({ favorites }); // Devolvemos los cursos favoritos en la respuesta
      } else {
        return res.status(404).json({ message: 'No tienes cursos favoritos.' });
      }
    } catch (error) {
      console.error("Error al obtener los cursos favoritos:", error);
      return res.status(500).json({ message: 'Hubo un error al obtener los cursos favoritos' });
    }
  }
};
*/