import mongoose from "mongoose";

let createEmployeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: [true, "employeeName is required"],
  },

  age: {
    type: Number,
    required: [true, "employeeAge is required"],
  },

  employeeGraduation: {
    type: String,
    required: [true, "employeeGraduation is required"],
  },

  role: {
    type: String,
    required: [true, "employeeRole is required"],
  },

  employeePhoneNumber: {
    type: Number,
    required: [true, "employeePhoneNumber is required"],
  },
});

export default createEmployeeSchema;
