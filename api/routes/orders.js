const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const OrdersController = require("../controllers/order");

router.get("/", checkAuth, OrdersController.ordersGetAll);

router.post("/", checkAuth, OrdersController.ordersCreateNew);

router.get("/:orderId", checkAuth, OrdersController.ordersGetOne);

router.delete("/:orderId", checkAuth, OrdersController.ordersDeleteOne);

module.exports = router;
