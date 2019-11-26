const express = require("express");
const router = express.Router();
const educationVideos = require("../models/educationVideos");
router.get("/", (req, res) => {
  educationVideos
    .find()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});
module.exports = router;

