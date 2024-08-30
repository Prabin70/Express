import { Router } from "express";
import {
  createTraineeController,
  deleteTrainee,
  readAllTrainee,
  readSpecificTrainee,
  updateTrainee,
} from "../controller/traineeController.js";

let traineeRouter = Router();
traineeRouter.route("/").post(createTraineeController);
traineeRouter.route("/").get(readAllTrainee);

traineeRouter.route("/:id").get(readSpecificTrainee);
traineeRouter.route("/:id").patch(updateTrainee);
traineeRouter.route("/:id").delete(deleteTrainee);

export default traineeRouter;
