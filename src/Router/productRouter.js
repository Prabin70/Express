import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductConttroller,
  readSpecificController,
  updateProductController,
} from "../controller/productController.js";

let productRouter = Router();

productRouter.route("/").post(createProductController);
productRouter.route("/").get(readAllProductConttroller);

// Dynammic route => it is always palced at last
productRouter.route("/:id").get(readSpecificController);
productRouter.route("/:id").patch(updateProductController);
productRouter.route("/:id").delete(deleteProductController);

export default productRouter;
