const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
router.post("/products", productController.createProduct);
router.get("/getProducts", productController.getProducts);
router.get("/:id", productController.singleProduct);
router.put("/update/:id", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.post("/insertMany", productController.InsertManyProduct);
router.put("/updateMany/:id", productController.UpdateMany);
// router.delete("/deleteMany/:id", productController.deleteMany);

// router.get("/:id", userController.getSingleUser);

module.exports = router;
