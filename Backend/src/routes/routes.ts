import express from "express";
import * as productServices from "../services/productServicesices";

const router = express.Router();

router.get("/");
router.post("/createproduct", productServices.Create);

export default router;
