import { Router } from "express";
import {
  createWebUserController,
  readAllWebUserController,
  verifyEmail,
} from "../controller/webUserController.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);
webUserRouter.route("/").get(readAllWebUserController);

webUserRouter.route("/verify-email").post(verifyEmail);
export default webUserRouter;
