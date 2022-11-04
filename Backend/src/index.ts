import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notfound.middleware";
// import config from "./config";
import api from "./routes/routes";

dotenv.config();

// const port: number = parseInt(process.env.PORT as string, 10);
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(errorHandler);
app.use(notFoundHandler);

app.use("/api", api.routes);
app.listen(port, () => console.log("https://localhost:" + port || 6476));
