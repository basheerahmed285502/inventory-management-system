import { z } from "zod";

export const createSaleSchema =
  z.object({
    sku: z
      .string()
      .min(1, "SKU is required"),

    quantity: z
      .number()
      .int()
      .positive(
        "Quantity must be greater than zero"
      )
  });