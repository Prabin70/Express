import { Product } from "../schema/model.js";

export const createProductController = async (req, res, next) => {
  try {
    let result = await Product.create(req.body);
    res.json({
      success: true,
      messsage: "Product create Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      messsage: false,
      message: error.message,
    });
  }
};

export const readAllProductConttroller = async (req, res, next) => {
  try {
    let result = await Product.find({});
    res.json({
      success: true,
      message: "pproduct read successfylly",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
