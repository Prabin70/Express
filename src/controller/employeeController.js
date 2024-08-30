import { Employee } from "../schema/model.js";

export const createEmployeeController = async (req, res, next) => {
  try {
    let result = await Employee.create(req.body);
    res.json({
      success: true,
      message: "employeeCreated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      messsage: "error on top",
    });
  }
};

export const readAllEmployee = async (req, res, next) => {
  try {
    let output = await Employee.find({});
    res.status(200).json({
      success: true,
      message: "All employee read successfully",
      data: output,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateEmployee = async (req, res, next) => {
  try {
    let data = req.body;
    let output = await Employee.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Employee updated  successfully",
      data: output,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
