import mongoose from "mongoose";
let product = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "productName is required"],
  },
  Quantity: {
    type: Number,
    required: [true, "Please enter the quantity"],
  },
  Price: {
    type: Number,
    required: [true, "Please enter the price"],
  },
  Featured: {
    type: Boolean,
    required: [true, "Featured status is required"],
  },
  ProductImage: {
    type: String,
    required: [true, "Product Image is required"],
  },
  ManufactureDate: {
    type: Date,
    required: [true, "Manufactured date is required"],
  },
  Company: {
    type: String,
    required: [true, "Company name is required"],
  },
});
export default product;
