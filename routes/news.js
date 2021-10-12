var express = require("express");
const { getNews, postNews } = require("../controllers/news");

var router = express.Router();

/* GET users listing. */
router.get("/search/:search_query", getNews);
router.post("/post", postNews);

module.exports = router;
