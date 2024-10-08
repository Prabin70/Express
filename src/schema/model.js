import mongoose from "mongoose";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema..js";
import bookSchema from "./bookSchema.js";
import teacherSchema from "./teacherSchema.js";

import webUserSchema from "./webUserSchema.js";
import bikeSchema from "./bikeSchema.js";
import studentSchema from "./studentSchema.js";
import departmentShema from "./departmentSchema.js";
import traineeSchema from "./traineeSchema.js";
import createEmployeeSchema from "./employeeSchema.js";

export const User = mongoose.model("User", userSchema);
export const Product = mongoose.model("Product", productSchema);
export const Book = mongoose.model("Book", bookSchema);
export const Teacher = mongoose.model("Teacher", teacherSchema);

export const Webuser = mongoose.model("Webuser", webUserSchema);
export const Bike = mongoose.model("Bike", bikeSchema);
export const Student = mongoose.model("Student", studentSchema);
export const Department = mongoose.model("Department", departmentShema);
export const Trainee = mongoose.model("Trainee", traineeSchema);
export const Employee = mongoose.model("Employee", createEmployeeSchema);
