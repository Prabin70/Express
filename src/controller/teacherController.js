import MailMessage from "nodemailer/lib/mailer/mail-message.js";
import { Teacher } from "../schema/model.js";

export const createTeacherController = async (req, res, next) => {
  try {
    let output = await Teacher.create(req.body);
    res.json({
      success: true,
      message: "Teacher has found",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllCreateTeacherController = async (req, res, next) => {
  try {
    let result = await Teacher.find({});
    res.json({
      success: true,
      message: "Found teacher successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTeacher = async (req, res, next) => {
  try {
    let data = await Teacher.findById(req.params.id);
    res.json({
      success: true,
      message: "Specific teacher read successfully",
      data: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTeacher = async (req, res, next) => {
  try {
    let data = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Teacher updated successfully",
      data: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTeacher = async (req, res, next) => {
  try {
    let result = await Teacher.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Teacher has been deleted",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
