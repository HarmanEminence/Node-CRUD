const Register = require("../models/registerModel");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
  try {
    // console.log(req.body);
    // const result = await Register.create(req.body);
    const { first_name, last_name, email, password } = req.body;

    // if(!result)
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await Register.findOne({ email });

    // Older Password
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    // // Encrypted Password
    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await Register.create({
      // req.body
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
    return res.status(200).send({
      status: 200,
      message: "Profile Updated successfully!",
      data: user,
    });

    // Create Token
    // const token = jwt.sign(
    //   { user_id: user._id, email },
    //   process.env.TOKEN_KEY,
    //   {
    //     expiresIn: "2h",
    //   }
    // );
    // save user token
    // user.token = token;
    // return new user
    // res.status(201).json(user);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email, password)) {
      res.status(400).send("All Input are required");
    }
    const user = await Register.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      //crete token

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "1h" }
      );
      user.token = token;
      res.status(200).json(user);
    }
    res.status(400).send("INVALID");
  } catch (error) {
    console.log(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
