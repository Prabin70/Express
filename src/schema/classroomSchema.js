import mongoose from "mongoose";

let classroomSchema = new mongoose.Schema({
  classroomSize: {
    type: String,
    required: [true, "classroomSize is required"],
  },
  students: {
    type: Number,
    require: [true, "students is required"],
  },
  desk: {
    type: Number,
    required: [true, "desk field is required"],
  },
});

export default classroomSchema;
