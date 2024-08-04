import { Desk } from "../schema/model.js";

export const createClassroomController = async (req, res, next) => {
  try {
    let ourOutput = await Desk.create(req.body);
    res.json({
      success: true,
      message: "classroom is good for students",
      data: ourOutput,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllClassroom = async (req, res, next) => {
  try {
    let result = await Desk.find({});
    res.json({
      success: true,
      message: "classroom read successfully",
      dada: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
