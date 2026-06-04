import { Router } from "express";
import { validate } from "../middleware/validate";
import {
  createProductSchema
} from "../validators/product-validator";
import { createProduct } from "../controllers/product-controller";
console.log("Product routes loaded");
const router = Router();

router.post(
  "/",
  validate(createProductSchema),
  createProduct
);


export default router;