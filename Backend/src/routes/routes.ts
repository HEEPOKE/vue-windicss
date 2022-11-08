import express from "express";
import productController from "../controllers/productController";

const router = express.Router();

router.get("/");
router.get("/api/product", productController.getAllProducts);
router.post("/api/create/product", productController.createProducts);
router.post("api/edit/product/:id", productController.editProducts);

export default router;
