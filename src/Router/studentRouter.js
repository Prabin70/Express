import { Router } from "express";
import {
  createStudentController,
  deleteStudentController,
  readAboutStudents,
  readSpecificStudent,
  updateStudentController,
} from "../controller/studentController.js";

let studentRouter = Router();
studentRouter.route("/").post(createStudentController);
studentRouter.route("/").get(readAboutStudents);

// dynamic router
studentRouter.route("/:id").get(readSpecificStudent);
studentRouter.route("/:id").patch(updateStudentController);
studentRouter.route("/:id").delete(deleteStudentController);
export default studentRouter;
