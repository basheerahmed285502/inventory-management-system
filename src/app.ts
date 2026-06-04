import express from "express";
import cors from "cors";
import "./db/database";
import productRoutes from "./routes/product-routes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/products", productRoutes);

export default app;