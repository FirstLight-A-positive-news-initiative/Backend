var express = require("express");
const {
    getNewsById,
    getNews,
    listNews,
    postNews,
} = require("../controllers/news");
const {
    searchNews,
    newsID,
    fetchNewsByGenre,
} = require("../middlewares/redis-news");

var router = express.Router();

/* GET news listing. */
router.get("/:id", newsID, getNewsById);
router.get("/list/:genres/:positivity/:skip", fetchNewsByGenre, listNews);
router.get("/search/:searchQuery", searchNews, getNews);
router.post("/post", postNews);

module.exports = router;
