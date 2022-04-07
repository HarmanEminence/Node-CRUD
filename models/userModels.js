const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
  },
  { collection: "users" }
);

var User = mongoose.model("User", UserSchema);

module.exports = User;
