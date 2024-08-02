import { Router } from "express";
import {
  createWebUserController,
  readAllWebUserController,
} from "../controller/webUserController.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);
webUserRouter.route("/").get(readAllWebUserController);
export default webUserRouter;
