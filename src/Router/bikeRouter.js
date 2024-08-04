import { Router } from "express";
import {
  createBikeController,
  deleteBikeController,
  readAllBikeController,
  readSpecificBike,
  updateBikeController,
} from "../controller/bikeController.js";

let createBikeRouter = Router();
createBikeRouter
  .route("/")
  .post(createBikeController)
  .get(readAllBikeController);

//dynaic router
//we use id in dynamic router
createBikeRouter
  .route("/:id")
  .get(readSpecificBike)
  .patch(updateBikeController)
  .delete(deleteBikeController);

export default createBikeRouter;
