import { Student } from "../schema/model.js";

export const createStudentController = async (req, res, next) => {
  try {
    let result = await Student.create(req.body);
    res.json({
      success: true,
      messsage: "Students detail is valid",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      messsage: error.message,
    });
  }
};

export const readAboutStudents = async (req, res, next) => {
  try {
    let output = await Student.find({});
    res.json({
      success: true,
      message: "StudentDetails read successfully",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
