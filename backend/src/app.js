import express from "express";
import "express-async-errors";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config.js";

import connect from "./db/connect.js";
import routes from "./routes/router.js";
import errorHandler from "./middlewares/error.js";

const PORT = process.env.PORT;
const app = express();

// forma de ler JSON / middleware do próprio express
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// conexão com banco de dados
connect();

// routes
app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})