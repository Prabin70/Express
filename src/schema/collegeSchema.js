import mongoose from "mongoose";

export const collegeSchema = new mongoose.Schema({
  facultyNumber: {
    type: Number,
    required: [true, "facultyNumber is required"],
  },
  managementSection: {
    type: String,
    required: [true, "managementSection is required"],
  },
  scienceFaculty: {
    type: String,
    required: [true, "scienceFaculty is required"],
  },
});
