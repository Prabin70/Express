import { House } from "../schema/model.js";

export const createHouseController = async (req, res, next) => {
  try {
    let result = await House.create(req.body);
    res.json({
      success: true,
      message: "House Created Successfully",
      data: result,
    });
    res.json({
      success: false,
      message: error.message,
    });
  } catch (error) {}
};
