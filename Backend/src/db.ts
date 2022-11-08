import mongoose from "mongoose";
import config from "./config";

const db = mongoose.connect(config.MONGO_HOST);

// const connectDB = async () => {
//   await mongoose.connect(config.MONGO_HOST);
//   console.log("MongoDb Connected");
// };

const DB = { db };

export default DB;
