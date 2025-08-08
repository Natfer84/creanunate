import express, { json, urlencoded } from "express";
import cors from "cors";
import { router } from "./routes/routes.js";


const app = express();

//app.use(cors());
app.use(cors({
  origin: 'http://tienda-creatividad-frontend.s3-website.eu-west-3.amazonaws.com', // dominio frontend de AWS
  credentials: true,
}));

app.use(json());
app.use(urlencoded({ extended: false }));



app.use(router);


export default app;

//const port = process.env.PORT || 5000;

//app.listen(port, () => console.log(`Server running on port ${port}`))
