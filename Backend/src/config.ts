import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const {
  PORT,
  HOST,
  MONGO_HOST,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DBNAME,
  MONGO_LOCAL,
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(MONGO_HOST, "MONGO_HOST is required");
assert(MONGO_USERNAME, "MONGO_USERNAME is required");
assert(MONGO_PASSWORD, "MONGO_PASSWORD is required");
assert(MONGO_PORT, "MONGO_PORT is required");
assert(MONGO_DBNAME, "MONGO_DBNAME is required");
assert(MONGO_LOCAL, "MONGO_LOCAL is required");

const config = {
  PORT,
  HOST,
  MONGO_HOST,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DBNAME,
  MONGO_LOCAL,
};

export default config;
