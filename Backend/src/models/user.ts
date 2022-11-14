import mongoose, { Schema } from "mongoose";
import UserInterface from "../interfaces/user";

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model<UserInterface>(
  "Users",
  UserSchema
);

export default Users;
