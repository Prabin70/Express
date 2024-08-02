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
