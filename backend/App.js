import express, { json, urlencoded } from "express";
import cors from "cors";
import { router } from "./routes/routes.js";
import path from "path"; // para que el backen sirva al front con la misma url que me da Railway, si no funciona, borrar.
import { fileURLToPath } from "url"; // para que el backen sirva al front con la misma url que me da Railway, si no funciona, borrar.

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());


app.use(router);
// Aquí configuro para que el backen sirva al front con la misma url que me da Railway, si no funciona, borrar.

// Necesario para usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// servir el frontend con build
app.use(express.static(path.join(__dirname, "../frontend/build")));
//
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
//-----------------------------------------------------------------------------------------------------


export default app;

//const port = process.env.PORT || 5000;

//app.listen(port, () => console.log(`Server running on port ${port}`))
