import { Book } from "../schema/model.js";

export const createBookController = async (req, res, next) => {
  try {
    let result = await Book.create(req.body);
    res.json({
      success: true,
      message: "Item Created successfully.",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllBookController = async (req, res, next) => {
  try {
    let output = await Book.find({});
    res.json({
      seccess: true,
      message: "Book read successfully",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};


export const readSpecificBook = ()=>{

}