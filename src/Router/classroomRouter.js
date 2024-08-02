import { Router } from "express";
import { createClassroomController } from "../controller/classroomController.js";

let classroomRouter = Router();
classroomRouter.route("/").post(createClassroomController);

export default classroomRouter;
