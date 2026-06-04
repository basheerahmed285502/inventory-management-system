import { Request, Response } from "express";
import db from "../db/database";

export const recordSale = async (
  req: Request,
  res: Response
) => {

  try {

    const { sku, quantity } =
      req.body;

    db.get(
      `
      SELECT *
      FROM products
      WHERE sku = ?
      `,
      [sku],
      (err, product: any) => {

        if (err) {

          return res.status(500).json({
            success: false,
            message: "Database error"
          });

        }

        if (!product) {

          return res.status(404).json({
            success: false,
            message: "Product not found"
          });

        }

        if (
          product.stock < quantity
        ) {

          return res.status(400).json({
            success: false,
            message:
              "Insufficient stock"
          });

        }

        const newStock =
          product.stock - quantity;

        db.run(
          `
          UPDATE products
          SET stock = ?
          WHERE id = ?
          `,
          [
            newStock,
            product.id
          ],
          (updateErr) => {

            if (updateErr) {

              return res.status(500).json({
                success: false,
                message:
                  "Stock update failed"
              });

            }

            db.run(
              `
              INSERT INTO sales
              (
                product_id,
                quantity
              )
              VALUES (?, ?)
              `,
              [
                product.id,
                quantity
              ],
              (saleErr) => {

                if (saleErr) {

                  return res.status(500).json({
                    success: false,
                    message:
                      "Sale creation failed"
                  });

                }

                return res.status(201).json({
                  success: true,
                  message:
                    "Sale recorded successfully",
                  data: {
                    sku,
                    soldQuantity:
                      quantity,
                    remainingStock:
                      newStock
                  }
                });

              }
            );

          }
        );

      }
    );

  } catch (error) {

    return res.status(500).json({
      success: false,
      message:
        "Internal Server Error"
    });

  }

};