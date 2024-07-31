import mongoose from "mongoose";

let teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: [true, "teacherName field is required"],
  },
  age: {
    type: Number,
    required: [true, "age field is required"],
  },
  currentSchool: {
    type: String,
    required: [true, "currentSchool field is required"],
  },
});
export default teacherSchema;
