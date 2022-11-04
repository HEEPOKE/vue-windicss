import express from "express";

const router = express.Router();

router.get("/", () => console.log("true"));
router.post("/createproduct");

export default router;