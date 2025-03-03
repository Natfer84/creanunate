import crudMysql from "../models/crudMysql/crudMysql.js";
//import { Link } from "react-router-dom";
import dotenv from 'dotenv'

export default {

// Función para manejar el inicio de sesión
login: async (req, res) => {
    try {
        const { username, password } = req.body // Recoge los datos del body.
        console.log("Datos recibidos en el backend:", req.body)
 

        //SELECT username, password FROM login where username = 'juan123' AND password = "claveSegura1";
        const values = ["username", "password", "login", "username", username, "password", password];
        console.log(values);


        const existsCustomer = await crudMysql.login(values);//aquí no entra
        console.log("Consultando en la base de datos...", existsCustomer);
        if (existsCustomer && existsCustomer.length > 0) {
            res.status(200).json(existsCustomer);
            //link al componente areaCliente
          
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
