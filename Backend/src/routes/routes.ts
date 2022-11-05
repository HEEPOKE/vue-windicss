import express from "express";
import * as productServices from "../services/productServices";

const router = express.Router();

router.get("/");
router.post("/product", productServices.getProductList);
// router.post("/createproduct", productServices.Create);

export default router;
