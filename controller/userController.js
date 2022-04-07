const User = require("../models/userModels");

const registerStudent = async (req, res) => {
  try {
    const result = await User.create(req.body);

    return res.status(200).send({
      status: 200,
      message: "Profile Updated successfully!",
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

const getStudent = async (req, res) => {
  try {
    const result = await User.find();

    return res.status(200).send({
      status: 200,
      message: "Get User",
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

const getSingleUser = async (req, res) => {
  try {
    const data = await User.findOne({ id: req.params.id });
    let response = {
      id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };
    return res
      .status(200)
      .send({ status: 200, message: "User Data", data: response });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await User.updateOne({ id: req.params.id });
    return res
      .status(200)
      .send({ status: 200, message: "User Data", data: response });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};
module.exports = {
  registerStudent,
  getStudent,
  getSingleUser,
  updateUser,
};
