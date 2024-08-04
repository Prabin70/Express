import { Router } from "express";
import {
  createUserController,
  readAllUserController,
} from "../controller/userController.js";

let userRouter = Router();
userRouter.route("/").post(createUserController);
userRouter.route("/").get(readAllUserController);

export default userRouter;
