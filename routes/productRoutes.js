import express from "express";
import { isAdmin, isAuth } from "./../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
} from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();


// ============== PRODUCT ROUTES ==================

// GET ALL PRODUCTS
router.get("/get-all", getAllProductsController);


// GET SINGLE PRODUCTS
router.get("/:id", getSingleProductController);

// CREATE PRODUCT
router.post("/create", isAuth, isAdmin, singleUpload, createProductController);

// UPDATE PRODUCT
router.put("/:id", isAuth, isAdmin, updateProductController);


// delete product
router.delete("/delete/:id", isAuth, isAdmin, deleteProductController);



// ====================================================================

export default router;
