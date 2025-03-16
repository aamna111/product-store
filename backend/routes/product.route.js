import express from "express";
const router = express.Router();
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controllers/product.controller.js";

router.get("/", getProducts);
router.post("/", createProducts);
router.delete("/:id", deleteProducts);
router.put("/:id", updateProducts)

export default router;