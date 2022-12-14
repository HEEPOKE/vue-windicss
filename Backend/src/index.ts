import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notfound.middleware";
import config from "./config";
import DB from "./db";
import router from "./routes/routes";

dotenv.config();

const app = express();

// DB.connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
// app.use(errorHandler);
// app.use(notFoundHandler);

app.use("/api", router);
app.listen(config.PORT, () => console.log("http://localhost:" + config.PORT));
