import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullName field is required"],
  },
  address: {
    type: String,
    required: [true, "address Field is required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried field is required"],
  },
});

export default userSchema;
