import mongoose from "mongoose";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema..js";
import bookSchema from "./bookSchema.js";
import teacherSchema from "./teacherSchema.js";

export const User = mongoose.model("User", userSchema);

export const Product = mongoose.model("Product", productSchema);
export const Book = mongoose.model("Book", bookSchema);
export const Teacher = mongoose.model("Teacher", teacherSchema);
