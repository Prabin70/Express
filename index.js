import express, { json } from "express";
import userRouter from "./src/Router/userRouter.js";
import connectDB from "./src/ConnectDatabase/connectMongo.js";
import productRouter from "./src/Router/productRouter.js";
import bookRouter from "./src/Router/bookRouter.js";
import teacherRouter from "./src/Router/teacherRouter.js";
import classroomRouter from "./src/Router/classroomRouter.js";
import createCollegeRouter from "./src/Router/collegeRouter.js";
import webUserRouter from "./src/Router/webUserRouter.js";
import createBikeRouter from "./src/Router/bikeRouter.js";
import studentRouter from "./src/Router/studentRouter.js";
import departmentRouter from "./src/Router/departmentRouter.js";
import traineeRouter from "./src/Router/traineeRouter.js";
import createEmployeeRouter from "./src/Router/employeeRouter.js";

const myApp = express();
const port = 3000;

myApp.use(json()); // read json data otherwise it willnot read the data

connectDB();

myApp.use("/user", userRouter);
myApp.use("/product", productRouter);
myApp.use("/book", bookRouter);
myApp.use("/teacher", teacherRouter);
myApp.use("/webuser", webUserRouter);
myApp.use("/college", createCollegeRouter);
myApp.use("/bikes", createBikeRouter);
myApp.use("/department", departmentRouter);
myApp.use("/trainee", traineeRouter);
myApp.use("/student", studentRouter);
myApp.use("/employee", createEmployeeRouter);

myApp.listen(port, () => {
  console.log(`Express is running at port ${port}.`);
});
// two types of import
