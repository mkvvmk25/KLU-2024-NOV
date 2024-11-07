let app = require("./app");
let mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/qwerty12345")
  .then(
    (full, rej) =>
    {
      console.log("DB Connect success");
    }
  );

app.listen(3001,()=> console.log("server is active"));