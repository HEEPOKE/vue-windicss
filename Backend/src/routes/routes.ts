import express from "express";
import productController from "../controllers/productController";

const router = express.Router();

router.get("/");
router.get("/product", productController.getAllProducts);
router.post("/create/product", productController.createProducts);

export default router;
