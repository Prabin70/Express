import mongoose from "mongoose";

let departmentShema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: [true, "departmentname is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  mainProducts: {
    type: String,
    required: [true, "mainProducts is required"],
  },
});
export default departmentShema;
