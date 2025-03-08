import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
//import path from "path";
//import { fileURLToPath } from "url";

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API creanunate",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
      contact: {
        name: "Nat",
      },
    },
    servers: [
      {
        url: "http://localhost:3001", // Cambia la URL si tu servidor está en otro puerto
      },
    ],
    components: {
        schemas: {
          UserLogin: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 1,
              },
              username: {
                type: "string",
                example: "juan123",
              },
              password: {
                type: "string",
                example: "claveSegura1",
              },
            },
          },
        },
      },
    },
  apis: [
    // Archivos donde se encuentran los comentarios para Swagger, con rutas absolutas  //path.resolve(__dirname,
    "./controllers/*.js",
    "./databases/*.js",
    "./models/*.js",
    "./routes/*.js"
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
export { swaggerUi, swaggerDocs};
