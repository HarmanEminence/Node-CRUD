const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    // name: {
    //   type: String,
    //   required: [true, "Please Enter Product Name"],
    //   trim: true,
    // },
    // description: {
    //   type: String,
    //   required: [true, "Please Enter Description"],
    // },
    // price: {
    //   type: Number,
    //   required: [true, "Please Enter Price"],
    // },
    // rating: {
    //   type: Number,
    //   default: 0,
    // },
    // images: [
    //   {
    //     public_id: {
    //       type: String,
    //       required: [true, "Please Fit Image"],
    //     },
    //     url: {
    //       type: String,
    //       required: [true, "Please URL Fit Image"],
    //     },
    //   },
    // ],
    // category: {
    //   type: String,
    //   required: [true, "Please Enter Category"],
    // },
    //   stock: {
    //     type: Number,
    //     required: [true, "Please Enter Product Stock"],
    //     default: 1,
    //   },
    //   numberofReviews: {
    //     type: Number,
    //     default: 0,
    //   },
    //   reviews: [
    //     {
    //       name: {
    //         type: String,
    //         required: [true],
    //       },
    //       rating: {
    //         type: String,
    //         required: [true],
    //       },
    //       comments: {
    //         trpe: String,
    //         required: [true],
    //       },
    //     },
    //   ],
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
    name: String,
    description: String,
    category: String,
    price: Number,
  },
  { collection: "products" }
);

var Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
