import { Router } from "express";
import { createTraineeController } from "../controller/traineeController.js";

let traineeRouter = Router();
traineeRouter.route("/").post(createTraineeController);

export default traineeRouter;
