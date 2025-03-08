import app from "./App.js";
import { swaggerUi, swaggerDocs } from "./swaggerOptions.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

// Configurar Swagger en la ruta /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => console.log(`Server running on port ${port}`))