import mongoose from "mongoose";
import config from "./config";

const db = mongoose.connect(config.MONGO_HOST);

export default db;
