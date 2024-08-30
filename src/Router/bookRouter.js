import { Router } from "express";
import {
  createBookController,
  deleteBookController,
  readAllBookController,
  readSpecificBook,
  updateBookController,
} from "../controller/bookController.js";

let bookRouter = Router();
bookRouter.route("/").post(createBookController);
bookRouter.route("/").get(readAllBookController);
bookRouter.route("/:id").get(readSpecificBook);
bookRouter.route("/:id").patch(updateBookController);
bookRouter.route("/:id").delete(deleteBookController);

export default bookRouter;
