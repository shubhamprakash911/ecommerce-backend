const express = require("express");
const router = express.Router();
const {
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/sellerController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/products", authMiddleware, addProduct);
router.put("/products/:id", authMiddleware, editProduct);
router.delete("/products/:id", authMiddleware, deleteProduct);

module.exports = router;
