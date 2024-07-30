import { Router } from "express";
import { createUserController } from "../controller/userController.js";

let userRouter = Router();
userRouter.route("/").post(createUserController);

export default userRouter;
