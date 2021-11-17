var express = require("express");
const { getComics, getSingleComic } = require("../controllers/comics");

var router = express.Router();

router.get("/:name", getComics);
router.get("/single/:id", getSingleComic);

module.exports = router;