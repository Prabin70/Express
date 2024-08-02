import mongoose from "mongoose";

let studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, "studentName field is required"],
  },
  age: {
    type: Number,
    required: [true, "age is rewuired"],
  },
  class: {
    type: Number,
    required: [true, "class is required"],
  },
  idCard: {
    type: Number,
    required: [true, "idCard is required"],
  },
});

export default studentSchema;
