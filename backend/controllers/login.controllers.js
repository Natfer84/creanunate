import crudMysql from "../models/crudMysql/crudMysql.js";
import dotenv from 'dotenv'

export default {

// Función para manejar el inicio de sesión
login: async (req, res) => {
    try {
        const { username, password } = req.body // Recoge los datos del body.
        console.log("Datos recibidos en el backend:", req.body)
 

        
        const existsCustomer = await crudMysql.login(process.env.TAB_LOGIN, username, password);
        console.log("Consultando en la base de datos...", existsCustomer);
        if (existsCustomer && existsCustomer.length > 0) {
            res.status(200).json(existsCustomer);
        } else {
                    return res.status(404).json({ error: 'El usuario no existe' });
                }
        if (!username || !password) {
            console.log("Error: Faltan datos obligatorios");
            return res.status(400).json({ message: 'Faltan datos obligatorios' })
        }
    } catch (error) {
        console.error('Error al hacer login:', error);
        res.status(500).json({ message: 'Error al hacer login', error });
    }
},
}
