import mongoose from "mongoose";

let bikeSchema = new mongoose.Schema({
  bikeName: {
    type: String,
    required: [true, "bikeName is required"],
  },
  bikeModel: {
    type: String,
    required: [true, "bikeModel is required"],
  },
  plateNumber: {
    type: Number,
    required: [true, "palteNumber is required."],
  },
});

export default bikeSchema;
