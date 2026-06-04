import { Request, Response } from "express";
import db from "../../db/database";

export const getProducts = async (
  req: Request,
  res: Response
) => {

  try {

    db.all(
      `
      SELECT
        id,
        name,
        sku,
        price,
        stock,
        created_at
      FROM products
      ORDER BY id DESC
      `,
      [],
      (err, rows) => {

        if (err) {

          return res.status(500).json({
            success: false,
            message: "Failed to fetch products"
          });

        }

        return res.status(200).json({
          success: true,
          count: rows.length,
          data: rows
        });

      }
    );

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

  }

};