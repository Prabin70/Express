import { Router } from "express";
import { createHouseController } from "../controller/houseController.js";

let houseRouter = Router();
houseRouter.route("/").post(createHouseController);
export default houseRouter;
