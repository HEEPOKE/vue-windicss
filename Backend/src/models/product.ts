import mongoose, { Schema } from "mongoose";
import ProductInterface from "../interfaces/product";

const ProductSchema: Schema = new Schema(
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

// ProductSchema.post<ProductProductInterface>("save", function () {
//   this.extraInformation = "want save";
// });

const Products = mongoose.model<ProductInterface>(
  "Products",
  ProductSchema
);

export default Products;
