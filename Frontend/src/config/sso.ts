import dotenv from "dotenv";

dotenv.config();

const { GOOGLE_CLIENT_ID, GOOGLE_ClientSecret, FACEBOOK_APPID } = process.env;

const config = {
  GOOGLE_CLIENT_ID,
  GOOGLE_ClientSecret,
  FACEBOOK_APPID,
};

export default config;
