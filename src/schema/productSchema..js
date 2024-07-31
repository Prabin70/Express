import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "ProductName field is requires"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity field is required"],
  },
  price: {
    type: Number,
    required: [true, "price field is rquired"],
  },
});
export default productSchema;
