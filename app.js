const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body-parser");  //depricated

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const userRoutes = require("./api/routes/user");

//mongoDb local connection
mongoose
  .connect("mongodb://localhost:27017/nodeRestShop")
  .then(() => {
    console.log("Mongo Connection Open...");
  })
  .catch((err) => {
    console.log("Oh no Error");
    console.log(err);
  });

// use sets up a middleware
app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: false })); //depricated. instead, use the two below:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CORS Error handling. Cannot be tested in Postman, only in browser, because error originate in browser
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization" //or * to allow all
//   );
//   if (req.method === "OPTIONS") {
//     //browser sends OPTIONS request first if Post or Put request is sent
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
// });
//below is the newer code after installation of npm cors

//enable all CORS requests
app.use(cors());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
