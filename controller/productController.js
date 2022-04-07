// const { response } = require("express");
// const res = require("express/lib/response");
const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    return res.status(200).send({
      status: 200,
      message: "Create Product",
      data: result,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const getData = await Product.find();

    // console.log(getData, "??????????????????");
    return res.status(200).send({
      status: 200,
      message: "Create Product",
      data: getData,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};

const singleProduct = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    let response = {
      id: data._id,
      name: data.name,
      description: data.description,
      category: data.category,
      price: data.price,
    };
    return res
      .status(200)
      .send({ status: 200, message: "Prodcut Single Data", data: response });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const data = await Product.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
      }
    );
    res.send(data);
    return res
      .status(200)
      .send({ status: 200, message: "Updated successfully" });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const deleteData = await Product.deleteOne({ _id: req.params.id });
    return res.status(200).send({
      status: 200,
      message: "Delte Successful",
      deleteData: deleteData,
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};

const InsertManyProduct = async (req, res) => {
  const arr = [];

  try {
    const data = await Product.insertMany(req.body, arr);
    return res
      .status(200)
      .send({ status: 200, message: "InserMany", data: data });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};

const UpdateMany = async (req, res) => {
  try {
    const data = await Product.updateMany(
      { user_id: "12345abc-w" },
      { $set: { name: "Yes" } }
    );
    return res
      .status(200)
      .send({ status: 200, message: "Update Many successfully", data });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};

// const deleteMany = async (req, res) => {
//   try {
//     const deleteManydata = await Product.deleteMany({
//       user_id: 1,
//     });
//     return res.status(200).send({
//       status: 200,
//       message: "Delete Many successfully",
//       deleteManydata,
//     });
//   } catch (error) {
//     return res.status(500).send({
//       status: 500,
//       message: "Something went wrong, please try again later!",
//       error: err.message,
//     });
//   }
// };

module.exports = {
  createProduct,
  getProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
  InsertManyProduct,
  UpdateMany,
  // deleteMany,
};
