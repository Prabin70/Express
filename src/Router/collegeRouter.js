import { Router } from "express";
import { createCollegeController } from "../controller/collegeController.js";

const createCollegeRouter = Router();
createCollegeRouter.route("/").post(createCollegeController);

export default createCollegeRouter;
