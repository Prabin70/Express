import { Router } from "express";
import {
  createStudentController,
  readAboutStudents,
} from "../controller/studentController.js";

let studentRouter = Router();
studentRouter.route("/").post(createStudentController);
studentRouter.route("/").get(readAboutStudents);

export default studentRouter;
