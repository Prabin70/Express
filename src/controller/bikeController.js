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
