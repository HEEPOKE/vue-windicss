import express from "express";
import { Request, Response, NextFunction } from "express";
import Product from "../interfaces/product";

const ProductRoute = express.Router();

ProductRoute.route("/").get((req, res, next) => {
  Product.find((error: any, data: any) => {
    if (error) {
      return next(error);
      
    } else {
      res.json(data);
    }
  });
});
