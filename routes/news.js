var express = require("express");
const { getNews, listNews, postNews } = require("../controllers/news");

var router = express.Router();

/* GET news listing. */
router.get("/list/:genres/:positivity/:skip", listNews);
router.get("/search/:searchQuery", getNews);
router.post("/post", postNews);

module.exports = router;
