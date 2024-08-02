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
