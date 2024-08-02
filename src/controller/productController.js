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

export const readSpecificController = async (req, res, next) => {
  try {
    let result = await Product.findById(req.params.id);
    res.json({
      success: true,
      message: "Product rea successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      message: false,
      message: error.message,
    });
  }
};

// to update data

export const updateProductController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      //new: true => it is used to insert the data after updat.
    });
    res.json({
      success: true,
      message: "Product updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//delete data in the MongoDB

export const deleteProductController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndDelete(req.params);
    res.json({
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
