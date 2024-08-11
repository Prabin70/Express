import { Trainee } from "../schema/model.js";

export const createTraineeController = async (req, res, next) => {
  try {
    let output = await Trainee.create(req.body);
    res.json({
      success: true,
      message: "trainee created successfully",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllTrainee = async (req, res, next) => {
  try {
    let result = await Trainee.find({});

    res.json({
      success: true,
      message: "Trainee read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTrainee = async (req, res, next) => {
  try {
    let result = await Trainee.findById(req.params.id);
    res.json({
      success: true,
      message: "Specific trainee read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
