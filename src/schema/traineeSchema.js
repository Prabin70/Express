import mongoose from "mongoose";

let traineeSchema = new mongoose.Schema({
  traineeName: {
    type: String,
    required: [true, "trainee name is required"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
  },
  profession: {
    type: String,
    required: [true, "profefssion is required"],
  },
});

export default traineeSchema;
