var express = require("express");
const {
    getNewsById,
    getNews,
    listNews,
    postNews,
} = require("../controllers/news");
// const {
//     searchNews,
//     newsID,
//     fetchNewsByGenre,
// } = require("../middlewares/redis-news");

var router = express.Router();

/* GET news listing. */
router.get("/:id", getNewsById);
router.get("/list/:genres/:positivity/:skip", listNews);
router.get("/search/:searchQuery", getNews);
router.post("/post", postNews);

module.exports = router;
