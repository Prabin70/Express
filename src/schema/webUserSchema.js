import mongoose from "mongoose";

let webUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullName field is required"],
  },
  email: {
    type: String,
    required: [true, "email field is required"],
  },
  password: {
    type: String,
    required: [true, "password field is required"],
  },
  address: {
    type: String,
    required: [true, "address field is required"],
  },
  role: {
    type: String,
    required: [true, "role field is required"],
  },
  isVerifiedEmail: {
    type: String,
    required: [true, "isVerifiedEmail is required"],
  },
});

export default webUserSchema;
