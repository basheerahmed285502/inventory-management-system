import { Router } from "express";

import {
  recordSale
} from "../controllers/sale-controller";

import {
  validate
} from "../middleware/validate";

import {
  createSaleSchema
} from "../validators/sale-validator";

const router = Router();

router.post(
  "/",
  validate(createSaleSchema),
  recordSale
);

export default router;