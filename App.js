const express = require("express");
const app = express();
const auth = require("./helper/auth");

var cors = require("cors");
const bodyParser = require("body-parser");

require("./config/database");
require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Authentication
app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
// Routes
app.use("/user", require("./routes/userRoutes.js"));
app.use("/product", require("./routes/productRoutes.js"));
app.use("/register", require("./routes/registerRoutes.js"));

app.listen(process.env.PORT, () => {
  console.log("app is listening on " + process.env.PORT);
});

module.exports = app;
