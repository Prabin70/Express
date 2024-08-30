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

export let readAllDepartmentsController = async (req, res, next) => {
  try {
    let output = await Department.find({});
    res.status(200).json({
      success: true,
      message: "read departments successfully",
      data: output,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificDepartment = async (req, res, next) => {
  try {
    let output = await Department.findById(req.params.id);
    res.json({
      success: true,
      message: "Specific department read successfully",
      result: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateDepartment = async (req, res, next) => {
  try {
    // data
    // id
    // 66ad01712a5c735e1c1a8414
    // departmentName
    // "kapanstore"
    // address
    // "kapan"
    // mainProducts
    // "phone"
    // __v
    // 0
    let data = req.body;

    let output = await Department.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Department updated successfully",
      data: output,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDepartment = async (req, res, next) => {
  try {
    let output = await Department.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Department deleted successfully",
      result: output,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
