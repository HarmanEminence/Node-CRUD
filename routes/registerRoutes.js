const express = require("express");
const router = express.Router();
const registerController = require("../controller/registerController");
router.post("/registers", registerController.registerUser);
router.post("/login", registerController.loginUser);

module.exports = router;
