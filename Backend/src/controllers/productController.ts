import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Products from "../models/product";
import * as productServices from "../services/productServices";

const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
  Products.find()
    .exec()
    .then((result) => {
      return res.status(200).json({
        products: result,
        count: result.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const createProducts = (req: Request, res: Response, next: NextFunction) => {};

export default { getAllProducts };
