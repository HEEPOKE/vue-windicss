import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const { PORT, HOST } = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

const config = { PORT, HOST };

export default config;
