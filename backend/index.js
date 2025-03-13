import app from "./App.js";
import { swaggerUi, swaggerDocs } from "./swaggerOptions.js";
import dotenv from "dotenv";
import { exec } from "child_process";
dotenv.config();

const port = process.env.PORT || 5000;

// Aquí he configurado los endpoin de Swagger y Selenium

// Endpoint para ejecutar Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Endpoint para ejecutar Selenium
app.get("/run-selenium", (req, res) => {
  // Ejecuta el script de selenium
  exec("node selenium/selenium.js", (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (stderr) {
      return res.status(500).json({ error: stderr });
    }

    res.json({ message: "Selenium ejecutado correctamente", output: stdout });
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
