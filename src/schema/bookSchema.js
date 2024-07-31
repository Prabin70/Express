import mongoose from "mongoose";

let bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: [true, "bookName field is required"],
  },
  price: {
    type: Number,
    required: [true, "price field is required"],
  },
  publication: {
    type: String,
    required: [true, "publication field is required"],
  },
});

export default bookSchema;
