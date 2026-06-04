import { Router } from "express";
import { validate } from "../middleware/validate";
import {
  createProductSchema
} from "../validators/product-validator";
import { createProduct } from "../controllers/product/create-product";
import { getProducts } from "../controllers/product/get-product";
console.log("Product routes loaded");
const router = Router();

router.post(
  "/",
  validate(createProductSchema),
  createProduct
);
router.get(
  "/",
  getProducts
);


export default router;