const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const ProductsController = require("../controllers/product");

router.get("/", ProductsController.productsGetAll);

router.post("/", checkAuth, ProductsController.productsCreateNew);

router.get("/:productId", ProductsController.productsGetOne);

router.patch("/:productId", checkAuth, ProductsController.productsUpdate);

router.delete("/:productId", checkAuth, ProductsController.productsDeleteOne);

module.exports = router;
