import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import conectarDB from './database/mongoConect.js';



const app = express();
const port = process.env.PORT || 3001;
conectarDB(); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
  });

app.listen(port, () => {
    console.log(`La aplicación corre en el: ${port}`);
});

