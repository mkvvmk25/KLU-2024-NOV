let express = require("express");

let app = express(); // app object
let productRouter = require("./routes/productRouter")

app.use(express.json()); // 

app.use("/v1.1/inventory", productRouter);

//127.0.0.1:3001/v1.1/inventiory/product

module.exports = app;