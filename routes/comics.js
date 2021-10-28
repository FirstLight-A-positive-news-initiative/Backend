var express = require("express");
const { getComics } = require("../controllers/comics");

var router = express.Router();

router.get("/:name", getComics);

module.exports = router;