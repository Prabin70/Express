import { Router } from "express";
import {
  createWebUserController,
  login,
  myProfile,
  readAllWebUserController,
  updatePassword,
  updateProfile,
  verifyEmail,
} from "../controller/webUserController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);
webUserRouter.route("/").get(readAllWebUserController);

webUserRouter.route("/verify-email").post(verifyEmail);
webUserRouter.route("/login").post(login);
webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);
webUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);

export default webUserRouter;
