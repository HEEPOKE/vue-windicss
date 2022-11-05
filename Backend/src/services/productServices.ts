import express from "express";
import { Request, Response, NextFunction } from "express";
import Product from "../interfaces/product";

const ProductRoute = express.Router();

export const getProductList = async (req:any, res:any) => {
  console.log("create")

};
