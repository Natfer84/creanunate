
import mongoose from 'mongoose';


const urlMongo = 'mongodb://127.0.0.1:27017/creanunate'; 

const conectarDB = async () => {
  try {
    await mongoose.connect(urlMongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); 
  }
};

export default conectarDB;


