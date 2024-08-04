import { Router } from "express";
import {
  createCollegeController,
  readAllCollege,
} from "../controller/collegeController.js";

const createCollegeRouter = Router();
createCollegeRouter.route("/").post(createCollegeController);
createCollegeRouter.route("/").get(readAllCollege);

export default createCollegeRouter;
