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

export const readSpecificBook = async (req, res, next) => {
  try {
    let result = await Book.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "specific book read successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBookController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Book.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Book updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book deleted Successfuly",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
