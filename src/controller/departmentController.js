import { Department } from "../schema/model.js";

export let createDepartmentController = async (req, res, next) => {
  try {
    let output = await Department.create(req.body);
    res.json({
      success: true,
      message: "Department controller has been created",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllDepartment = async (res, req, next) => {
  try {
    let output = await Department.find({});
    res.json({
      success: true,
      message: "Read department sucessfully",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
