const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/products1");
const orderRoutes = require("./api/routes/orders1");

mongoose.connect(
    "mongodb://node-shop:"+
    process.env.MONGO_ATLAS_PW +
    "@node-rest-shop-shard-00-00-xfi9v.mongodb.net:27017,node-rest-shop-shard-00-01-xfi9v.mongodb.net:27017,node-rest-shop-shard-00-02-xfi9v.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true",
  {
    useMongoClient: true
  }
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({credentials: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8443"); //http://localhost:8443
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization , Credentials , X-Custom-Header"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((req, res, next) => {
  const error = new Error("Unauthorized");
  error.status = 401;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
