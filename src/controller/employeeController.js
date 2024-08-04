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
