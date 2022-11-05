import { Document } from "mongoose";
export default interface ProductInterface extends Document {
  id: number | null;
  name: string;
  color: string;
  category: string;
  price: number;
  image: [];
}
