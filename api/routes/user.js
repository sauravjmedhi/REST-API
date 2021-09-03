const express = require("express");
const router = express();
const checkAuth = require("../middleware/check-auth");

const UserController = require("../controllers/user");

router.post("/signup", UserController.userSignUp);

router.post("/login", UserController.userLogin);

router.delete("/:userId", checkAuth, UserController.userDelete);

module.exports = router;
