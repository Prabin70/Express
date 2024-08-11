import { Router } from "express";
import {
  createWebUserController,
  forgotPassword,
  login,
  myProfile,
  readAllWebUserController,
  resetPassword,
  updatePassword,
  updateProfile,
  verifyEmail,
} from "../controller/webUserController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { isAuthorization } from "../middleware/isAuthorization.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);
webUserRouter
  .route("/")
  .get(isAuthenticated, isAuthorization(["admin"]), readAllWebUserController);

webUserRouter.route("/verify-email").post(verifyEmail);
webUserRouter.route("/login").post(login);
webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);
webUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);
webUserRouter.route("/forgot-password").post(forgotPassword);
webUserRouter.route("/reset-password").post(isAuthenticated, resetPassword);

export default webUserRouter;
