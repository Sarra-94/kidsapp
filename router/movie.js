const express = require("express");
const router = express.Router();
const movie = require("../models/movie");

router.get("/", (req, res) => {
  movie.find()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

// router.post("/", (req, res) => {
//   const newmovie = new movie({
//     url: req.body.url,
//     theme: req.body.theme,
//     titre: req.body.titre,
//      age:req.body.age,
//     // favorite: req.body.favorite,
//     lang: req.body.lang
//   });
//   newmovie.save()
//     .then(data => res.json(data))
//     .catch(err => res.send(err));
// });

module.exports = router;
