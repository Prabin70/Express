import cors from "cors";
import express, { json } from "express";
import connectDB from "./src/ConnectDatabase/connectMongo.js";
import createBikeRouter from "./src/Router/bikeRouter.js";
import bookRouter from "./src/Router/bookRouter.js";
import departmentRouter from "./src/Router/departmentRouter.js";
import createEmployeeRouter from "./src/Router/employeeRouter.js";
import fileRouter from "./src/Router/fileRouter.js";
import houseRouter from "./src/Router/houseRouter.js";
import productRouter from "./src/Router/productRouter.js";
import studentRouter from "./src/Router/studentRouter.js";
import teacherRouter from "./src/Router/teacherRouter.js";
import traineeRouter from "./src/Router/traineeRouter.js";
import userRouter from "./src/Router/userRouter.js";
import webUserRouter from "./src/Router/webUserRouter.js";

const myApp = express();
const port = 3000;


myApp.use(json());
myApp.use(cors()); // read json data otherwise it willnot read the data
myApp.use(express.static("./public"));

connectDB();

myApp.use("/user", userRouter);
myApp.use("/product", productRouter);
myApp.use("/book", bookRouter);
myApp.use("/teacher", teacherRouter);
myApp.use("/webuser", webUserRouter);
myApp.use("/bikes", createBikeRouter);
myApp.use("/department", departmentRouter);
myApp.use("/trainee", traineeRouter);
myApp.use("/student", studentRouter);

myApp.use("/house", houseRouter);
myApp.use("/employee", createEmployeeRouter);
myApp.use("/file", fileRouter);

myApp.listen(port, () => {
  console.log(`Express is running at port ${port}.`);
});
// two types of import
