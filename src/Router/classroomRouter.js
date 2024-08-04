import { Router } from "express";
import {
  createClassroomController,
  readAllClassroom,
} from "../controller/classroomController.js";

let classroomRouter = Router();
classroomRouter.route("/").post(createClassroomController);
classroomRouter.route("/").get(readAllClassroom);

export default classroomRouter;
