import { College } from "../schema/model.js";

export const createCollegeController = async (req, res, next) => {
  try {
    let result = await College.create(req.body);
    res.json({
      success: true,
      message: "College is good",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllCollege = async (req, res, next) => {
  try {
    let result = await College.find({});
    res.json({
      success: true,
      message: "College read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
