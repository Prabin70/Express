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

export const readSpecificStudent = async (req, res, next) => {
  try {
    let result = await Student.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "specific student successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStudentController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Student.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteStudentController = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
