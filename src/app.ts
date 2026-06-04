import express from "express";
import cors from "cors";
import "./db/database";
import productRoutes from "./routes/product-routes";
import saleRoutes
from "./routes/sale-routes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/products", productRoutes);
app.use(
  "/sales",
  saleRoutes
);

export default app;