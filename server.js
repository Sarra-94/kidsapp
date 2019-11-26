const express = require("express");
const mongoose = express("mongoose");
const app = express();

// body-parser
app.use(express.json());

// connect db
const mongoURI = "mongodb://localhost:27017/kids";
mongoose
  .connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("mongodb connected ..."))
  .catch(err => console.log(err));
//API route
app.use("/educationVideos", require("./router/educationVideos"));
//run server
app.listen(5000, err =>
  !err ? console.log("server is running on port 5000") : console.log("error")
);
