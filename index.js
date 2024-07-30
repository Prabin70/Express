import express, { json } from "express";
import userRouter from "./src/Router/userRouter.js";
import connectDB from "./src/ConnectDatabase/connectMongo.js";

const myApp = express();
const port = 3000;

myApp.use(json()); // read json data otherwise it willnot read the data

connectDB();

myApp.use("/user", userRouter);

myApp.listen(port, () => {
  console.log(`Express is running at port ${port}.`);
});
// two types of import
