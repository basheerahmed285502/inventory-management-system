import { Request, Response } from "express";
import db from "../db/database";

interface InventorySummary {
  totalProducts: number;
  totalStockUnits: number;
  totalInventoryValue: number;
}

const fetchInventorySummary = (
  sql: string,
  params: any[] = []
): Promise<InventorySummary> => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row: InventorySummary) => {
      if (err) {
        return reject(err);
      }

      resolve(
        row ?? {
          totalProducts: 0,
          totalStockUnits: 0,
          totalInventoryValue: 0
        }
      );
    });
  });
};

export const getSummary = async (
  req: Request,
  res: Response
) => {
  try {
    const summary = await fetchInventorySummary(
      `
      SELECT
        COUNT(*) AS totalProducts,
        COALESCE(SUM(stock), 0) AS totalStockUnits,
        COALESCE(SUM(stock * price), 0) AS totalInventoryValue
      FROM products
      `
    );

    return res.status(200).json({
      success: true,
      data: summary
    });
  } catch (error) {
    console.error("Failed to fetch inventory summary", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch inventory summary"
    });
  }
};
