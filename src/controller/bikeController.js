import { Bike } from "../schema/model.js";

export const createBikeController = async (req, res, next) => {
  try {
    let result = await Bike.create(req.body);
    res.json({
      success: true,
      message: "Bike is good.",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllBikeController = async (req, res, next) => {
  try {
    let output = await Bike.find({});
    res.json({
      success: true,
      message: "Bike read successfully",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificBike = async (req, res, next) => {
  try {
    let output = await Bike.findById(req.params.id);
    res.json({
      success: true,
      message: "specific bike read successfully",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBikeController = async (req, res, next) => {
  try {
    let output = await Bike.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: `${output.bikeName} updated successfully`,
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBikeController = async (req, res, next) => {
  try {
    let result = await Bike.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: `${result.bikeName} deleted Successully`,
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
