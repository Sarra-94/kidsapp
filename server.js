const express = require("express");
const mongoose = require("mongoose");
const app = express();


// body-parser
app.use(express.json());

// connect db
const mongoURI = "mongodb://localhost:27017/kids";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected ..."))
  .catch(err => console.log(err));

//API route
app.use("/educationvideos", require("./router/educationVideos"));

//run server
const port = process.env.PORT || 5000;
app.listen(port, err =>
  !err ? console.log("server is running on port 5000") : console.log("error")
);
