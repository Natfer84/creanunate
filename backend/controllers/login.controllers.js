import crudMysql from "../models/crudMysql/crudMysql";
import mysqlConnection from "../databases/mysql.connection";
import dotenv from 'dotenv'

export default {

// Función para manejar el inicio de sesión
login: async (req, res) => {
    try {
        const { username, paswoord } = req.body // Recoge los datos del body.
        
        const userExists1 = await genericCrud.defineRol(process.env.TAB_LOGIN, username, paswoord);

        if (userExists1) {
            res.status(200).json(userExists1);
        } else {
                    return res.status(404).json({ error: 'El usuario no existe' });
                }
        if (!login || !pass) {
            return res.status(400).json({ message: 'Faltan datos obligatorios' })
        }
    } catch (error) {
        console.error('Error al hacer login:', error);
        res.status(500).json({ message: 'Error al hacer login', error });
    }
},
}
