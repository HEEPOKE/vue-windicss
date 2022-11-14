import mongoose, { Schema } from "mongoose";
import UserInterface from "../interfaces/user";

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model<UserInterface>(
  "Users",
  UserSchema
);

export default Users;
