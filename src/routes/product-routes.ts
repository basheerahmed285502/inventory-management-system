import { Router } from "express";
console.log("Product routes loaded");
const router = Router();

router.get("/", (req, res) => {
  
  res.json({
    success: true,
    message: "Products Route Working"
  });
});

export default router;