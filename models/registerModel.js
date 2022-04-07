const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterSchema = new Schema(
  {
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
  },
  { collection: "registers" }
);

module.exports = mongoose.model("Register", RegisterSchema);
