require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/creanunate", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar", err));

// Definir el esquema y modelo para los cursos
const courseSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  url: String,
});

const Course = mongoose.model("Course", courseSchema, "courses");

// Endpoint para obtener los cursos
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los cursos" });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
