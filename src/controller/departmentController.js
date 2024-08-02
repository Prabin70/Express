import { Department } from "../schema/model.js";

export let createDepartmentController = async (req, res, next) => {
  try {
    let data = req.body;
    let output = await Department.create(data);
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
