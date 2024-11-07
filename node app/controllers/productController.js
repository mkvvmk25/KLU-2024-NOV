let productModel = require("./../models/productModel");

exports.createProduct = async (req, res) => {
	try {
		let newProduct = await productModel.create(req.body);

		res.status(201).json({
			status: "success",
			product: newProduct,
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			reason: err.errmsg,
		});
	}
};
