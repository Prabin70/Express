import express, { json } from "express";
import userRouter from "./src/Router/userRouter.js";
import connectDB from "./src/ConnectDatabase/connectMongo.js";
import productRouter from "./src/Router/productRouter.js";
import bookRouter from "./src/Router/bookRouter.js";
import teacherRouter from "./src/Router/teacherRouter.js";

const myApp = express();
const port = 3000;

myApp.use(json()); // read json data otherwise it willnot read the data

connectDB();

myApp.use("/user", userRouter);
myApp.use("/product", productRouter);
myApp.use("/book", bookRouter);
myApp.use("/teacher", teacherRouter);

myApp.listen(port, () => {
  console.log(`Express is running at port ${port}.`);
});
// two types of import
