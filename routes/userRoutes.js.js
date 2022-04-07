const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
router.post("/register", userController.registerStudent);
router.get("/get", userController.getStudent);

router.get("/:id", userController.getSingleUser);
router.put(":/id", userController.updateUser);

// router.get("/:id", userController.getSingleUser);

module.exports = router;
