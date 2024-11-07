let express = require("express");
let productController = require("./../controllers/productController");

let router = express.Router();

router.route("/product").
  post(productController.createProduct);

module.exports = router;