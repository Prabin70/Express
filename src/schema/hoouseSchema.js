import mongoose from "mongoose";

let houseSchema = new mongoose.Schema({
  houseName: {
    type: String,
    required: [true, "House name is required"],
  },
  houseAddress: {
    type: String,
    required: [true, "House address is required"],
  },
  houseNumber: {
    type: Number,
    required: [true, "House number is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
});

export default houseSchema;
