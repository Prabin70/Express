import { Router } from "express";
import {
  createTraineeController,
  readAllTrainee,
  readSpecificTrainee,
} from "../controller/traineeController.js";

let traineeRouter = Router();
traineeRouter.route("/").post(createTraineeController);
traineeRouter.route("/").get(readAllTrainee);
traineeRouter.route("/").get(readSpecificTrainee);

export default traineeRouter;
