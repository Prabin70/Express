import { Product } from "../schema/model.js";

// export const createProductController = async (req, res, next) => {
//   try {
//     let result = await Product.create(req.body);
//     res.json({
//       success: true,
//       messsage: "Product create Successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.json({
//       messsage: false,
//       message: error.message,
//     });
//   }
// };

export const readAllProductConttroller = async (req, res, next) => {
  try {
    let result = await Product.find({});
    res.json({
      success: true,
      message: "pproduct read successfylly",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificController = async (req, res, next) => {
  try {
    let result = await Product.findById(req.params.id);
    res.json({
      success: true,
      message: "Product rea successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      message: false,
      message: error.message,
    });
  }
};

// // to update data

export const updateProductController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      //new: true => it is used to insert the data after updat.
    });
    res.json({
      success: true,
      message: "Product updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// //delete data in the MongoDB

export const deleteProductController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// import { Product } from "../Schema/model.js";

export const createProductController = async (req, res, next) => {
  try {
    let data = await Product.create(req.body);
    res.json({
      success: true,
      message: "Product created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllProductController = async (req, res, next) => {
  // const limit = 2;
  // const sort = "price";
  try {
    // find output are always in array of objects => [{},{},{}]
    // $gt = greater than
    // $gte = greater than equal
    // $lt = less than
    // $lte = less than equal

    // let result = await Product.find({}).skip(2);
    // let pipeline = [];

    // let matchStage = {
    //   $match: {
    //     name: "mern",
    //     // price: {
    //     //   $lt: 60000,
    //     // },
    //   },
    // };
    // pipeline.push(matchStage);

    // let skipStage = {
    //   $skip: 1,
    // };
    // pipeline.push(skipStage);

    // let sortStage = {
    //   $sort: {
    //     // name: -1,
    //     price: -1,
    //   },
    // };
    // pipeline.push(sortStage);

    //harek category ko quantity of product
    // let groupStage = {
    //   $group: {
    //     _id: "$category",
    //     // category: { $push: "$software" },
    //     products: { $push: "$$ROOT" },
    //     totalPrice: {
    //       $sum: "$price",
    //     },
    //   },
    // };
    // pipeline.push(groupStage);

    // let result = await Product.aggregate(pipeline);

    res.json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
