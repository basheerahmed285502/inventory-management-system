import { z } from "zod";

export const createProductSchema =
  z.object({
    name: z
      .string()
      .min(1, "Name is required"),

    sku: z
      .string()
      .min(1, "SKU is required"),

    price: z
      .number({
        error: "Price must be a number"
      })
      .min(
        0,
        "Price cannot be negative"
      ),

    stock: z
      .number({
        error: "Stock must be a number"
      })
      .int()
      .min(
        0,
        "Stock cannot be negative"
      )
  });