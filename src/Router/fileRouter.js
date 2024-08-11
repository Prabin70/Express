import { Router } from "express";
import {
  handleMultipleFileController,
  handleSingeFileController,
} from "../controller/fileController.js";
import upload from "../utils/sendFile.js";

let fileRouter = Router();
fileRouter
  .route("/single")
  .post(upload.single("document"), handleSingeFileController);
fileRouter
  .route("/multiple")
  .post(upload.array("document"), handleMultipleFileController);

export default fileRouter;
