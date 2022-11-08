import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Products from "../models/product";

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

const createProducts = (req: Request, res: Response, next: NextFunction) => {
  let { name, color, category, price } = req.body;

  const product = new Products({
    _id: new mongoose.Types.ObjectId(),
    name,
    color,
    category,
    price,
  });

  return product
    .save()
    .then((result) => {
      return res.status(201).json({
        product: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const editProducts = (req: Request, res: Response, next: NextFunction) => {
  let { name, color, category, price } = req.body;

  const product = new Products({
    _id: new mongoose.Types.ObjectId(),
    name,
    color,
    category,
    price,
  });

  return product
    .save()
    .then((result) => {
      return res.status(201).json({
        product: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { getAllProducts, createProducts, editProducts };
