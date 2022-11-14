import { Document } from "mongoose";
export default interface UserInterface extends Document {
  id: number | null;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  status: string;
  role: string;
//   profile: [];
}
