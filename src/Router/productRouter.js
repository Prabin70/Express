import { Router } from "express";
import {
  createProductController,
  readAllProductConttroller,
} from "../controller/productController.js";

let productRouter = Router();

productRouter.route("/").post(createProductController);
export default productRouter;

productRouter.route("/").get(readAllProductConttroller);
