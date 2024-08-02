import { Router } from "express";
import {
  createBikeController,
  readAllBikeController,
} from "../controller/bikeController.js";

let createBikeRouter = Router();
createBikeRouter.route("/").post(createBikeController);
createBikeRouter.route("/").get(readAllBikeController);

export default createBikeRouter;
