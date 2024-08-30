import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readAllUserController,
  readSpecificUserController,
  updateUserController,
} from "../controller/userController.js";

let userRouter = Router();
userRouter.route("/").post(createUserController);
userRouter.route("/").get(readAllUserController);
userRouter.route("/:id").get(readSpecificUserController);
userRouter.route("/:id").patch(updateUserController);
userRouter.route("/:id").delete(deleteUserController);

export default userRouter;
