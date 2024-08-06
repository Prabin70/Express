import { Router } from "express";
import {
  createWebUserController,
  login,
  readAllWebUserController,
  verifyEmail,
} from "../controller/webUserController.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);
webUserRouter.route("/").get(readAllWebUserController);

webUserRouter.route("/verify-email").post(verifyEmail);
webUserRouter.route("/login").post(login);

export default webUserRouter;
