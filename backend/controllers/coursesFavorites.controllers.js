import crudMysql from '../models/crudMysql/crudMysql.js'
import dotenv from 'dotenv';
dotenv.config();


export default{


    allfavorites: async (req, res) => {
        try {
            const values = ["favorites"];
            const result = await crudMysql.getFavorites(values)
            
            res.json(result)
console.log(result);
        } catch (error) {
			return res.status(500).json({ message: 'Error en el registro', error })
		}
    },

}