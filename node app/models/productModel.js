let mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
  {
    "name": {
      type: String,
      required: true,
      unique: true
    },
    "price": {
      type: Number,
      required: true,
    },
    "quantity": {
      type: Number,
      required: true,
      default: 0
    }
  }
);

let productModel = mongoose.model(
  "productInv1001",
  productSchema
);


module.exports = productModel;
