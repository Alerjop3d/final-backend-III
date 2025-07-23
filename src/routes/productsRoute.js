import { Router } from "express";
import obtenerProductosMiddleware from "../middlewares/productMiddleware.js";

const router = Router();
router.use(obtenerProductosMiddleware);

router.get("/", (req, res) => {
  const allProducts = req.allProducts;
  res.json(allProducts);
});

router.get("/:type", (req, res) => {
  const typeDevice = req.params.type;
  const productsFiltered = req.allProducts.filter(el => el.type === typeDevice)
  res.json(productsFiltered)
});

export default router;