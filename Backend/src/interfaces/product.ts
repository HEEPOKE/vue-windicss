import { Document } from "mongoose";
export default interface ProductInterface extends Document {
  name: string;
  color: string;
  category: string;
  price: number;
  image: [];
}
