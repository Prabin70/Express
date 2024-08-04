import { Router } from "express";
import {
  createBookController,
  readAllBookController,
} from "../controller/bookController.js";

let bookRouter = Router();
bookRouter.route("/").post(createBookController);
bookRouter.route("/").get(readAllBookController);

export default bookRouter;
