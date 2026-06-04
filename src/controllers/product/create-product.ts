import { Request, Response } from "express";
import db from "../../db/database";


export const createProduct =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const {
        name,
        sku,
        price,
        stock
      } = req.body;

      db.run(
        `
        INSERT INTO products
        (
          name,
          sku,
          price,
          stock
        )
        VALUES (?, ?, ?, ?)
        `,
        [
          name,
          sku,
          price,
          stock
        ],
        function (err) {

          if (err) {

            return res.status(400).json({
              success: false,
              message:
                "SKU already exists"
            });

          }

          return res.status(201).json({
            success: true,
            data: {
              id: this.lastID,
              name,
              sku,
              price,
              stock
            }
          });

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