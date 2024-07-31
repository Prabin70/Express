import { Router } from "express";
import { createBookController } from "../controller/bookController.js";

let bookRouter = Router();
bookRouter.route("/").post(createBookController);

export default bookRouter;
