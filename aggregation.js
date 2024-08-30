// MongoDb:
//     Its nothing but a document oriented NoSQL database. Stores data in a JSON-like documents.

// MongoDb aggregation:
//     -MongoDB aggregation is a powerful framework for performing data manipulation operations
//      in MongoDB database.
//     -It allows us to perform complex operations such as filtering, grouping, sorting, and
//      transforming data in a highly efficient manner.

//      MongoDb aggregation uses a pipeline approach where documents are passed through sequence of stages.

// Pipeline: pipeline is nothing but an array of stages. Each stage performs an operation on the data
//          and passes the result to the next stage.

//         [stage1,stage2,stage3,........]

//         stage1 performs operation and give results, the results then is passed to stage2 and stage2
//         will perform operations and give results to the next one.

// Stages are nothing but instructions what to do with the documents.
// some common stages:

// $match: It is used for filtering the documents according to the conditions.
//         It is similar to the where clause in SQL.

//         ---Product.aggregate([{$match:{}}])
//         ---select * from products.

//         ---Product.aggregate([{$match:{category:"Electronics"}}])
//         ---select * from products where category = Electronics

// $group: The '$group' stage is similar to 'group by'statement of SQL. The $group stage groups rows
//         that have the same values into summary rows, like "find the number of products in each country".

//         ----Product.aggregate([{$group:{
//                 _id:"$category",
//                 TotalQuantity : {$sum:"$quantity"}
//             }}])

//         ----Select count(*) as TotalQuantity from products.

// $sort: is used for sorting the documents. You just have to set the value of the field to
//         1(ascending) or -1(descending) by which you are trying to sort.

//         ----Product.aggregate([{$sort:{
//              productName:-1
//             }}])

//         ----SELECT * FROM Products ORDER BY name DESC;

// $skip and $limit:
//     $skip: Skips a specified number of documents at the beginning of the pipeline output.
//     $limit: Limits the number of documents returned by the aggregation pipeline.

//     ----Product.aggregate([
//         { $skip: 3 },
//         { $limit: 3 }
//         ])

// $project: $project is used for manipulating(inclusion and exclusion) and transforming(renaming)
//           document fields while displaying the results.

//        if field is set to 1 then it will be shown while displaying the output otherwise will not be shown.

//         -aggregate([{
//             $project:{
//                 name:1 //name included
//             }
//           }])

//           Renaming:

//           -aggregate([{
//             $project:{
//                 Product:"$name"     // name will be shown as Product.
//             }
//           }])

// $lookup:
//     It allows you to perform join-like operations and populate documents with additional information.

// $unwind: wrapper kholna ko lagi

// Review Service
import { Review } from "../schema/model.js";

export const creatReviewService = async (data) => {
  return await Review.create(data);
};

export const readAllReviewService = async () => {
  // return await Review.find({})
  //   .populate("product", "name description price quantity")
  //   .populate("user", "-password");

  let result = await Review.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "product",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userDetails",
      },
    },
    {
      $unwind: {
        path: "$userDetails",
      },
    },
    {
      $unwind: {
        path: "$productDetails",
      },
    },
    // {
    //   $project: {
    //     "user.password": 0,
    //   },
    // },
  ]);
  return result;
};

// in populate  use all +,
//or
//in populate user all -
// except _id

export const readSpecificReviewService = async (id) => {
  return await Review.findById(id)
    .populate("product", "name description price quantity")
    .populate("user", "-password");
};

export const updateReviewService = async (id, body) => {
  return await Review.findByIdAndUpdate(id, body, { new: true });
};

export const deleteReviewService = async (id) => {
  return await Review.findByIdAndDelete(id);
};

//Product Service
import { Product } from "../schema/model.js";

export const creatProductService = async (data) => {
  return await Product.create(data);
};

export const readAllProductService = async () => {
  // return await Product.find({});

  // matchStage
  // SELECt * FROM product

  let pipeline = [];
  let matchStage = {
    $match: {
      name: "bike",
      price: {
        $lt: 50,
      },
    },
  };
  pipeline.push(matchStage);

  // let skipStage = {
  //   $skip: 1,
  // };
  // pipeline.push(skipStage);

  // let sortStage = {
  //   $sort: {
  //     name: 1,
  //     price: 1,
  //   },
  // };
  // pipeline.push(sortStage);

  // let limitStage = {
  //   $limit: 2,
  // };

  // pipeline.push(limitStage);

  //harek category ko quantity of product
  // let groupStage = {
  //   $group: {
  //     _id: "$category",
  //     products: { $push: "$$ROOT" },
  //     // totalPrice: {
  //     //   $sum: "$price",
  //     // },
  //   },
  // };

  // pipeline.push(groupStage);

  // let projectStage = {
  //   $project: {
  //     _id: 0,
  //     // name: 1,
  //     description: 1,
  //     productName: "$name",
  //   },
  // };
  // pipeline.push(projectStage);

  // console.log(pipeline);

  // let searchStage = {
  //   $match: {
  //     $or: [
  //       {
  //         name: { $regex: "iphone", $options: "i" }, // insensitive searching
  //       },
  //       {
  //         description: { $regex: "iphone", $options: "i" },
  //       },
  //       {
  //         category: { $regex: "iphone", $options: "i" },
  //       },
  //     ],
  //   },
  // };
  // pipeline.push(searchStage);
  return await Product.aggregate(pipeline);
};

export const readSpecificProductService = async (id) => {
  return await Product.findById(id);
};

export const updateProductService = async (id, body) => {
  return await Product.findByIdAndUpdate(id, body, { new: true });
};

export const deleteProductService = async (id) => {
  return await Product.findByIdAndDelete(id);
};
