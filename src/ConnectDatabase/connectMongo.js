import mongoose from "mongoose";
let connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/ExpressJS");
  console.log("Connect to MongoDB");
};

export default connectDB;
