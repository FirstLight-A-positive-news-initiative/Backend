var express = require("express");
const { getComics, getSingleComic } = require("../controllers/comics");
// const {
//     getComicsCache,
//     getComicByIDCache,
// } = require("../middlewares/redis-comics");

var router = express.Router();

router.get("/:name", getComics);
router.get("/single/:id", getSingleComic);

module.exports = router;
