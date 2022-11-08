import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';


const {
    MONGO_HOST,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_DB,
    MONGO_LOCAL,
  } = process.env;
  
  let MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
  
  if (MONGO_LOCAL) {
    MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
  }
  
  export const client = new MongoClient(MONGO_URI);
  export const db = client.db();

  // mongoose.connect(MONGO_URI).then(result => {
  //   logging.info(NAMESPACE, "Connect SUCCESS");
  // })