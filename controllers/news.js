const News = require("../models/news");
// const redisClient = require("../db/redis");

const getNewsById = async (req, res, next) => {
    try {
        const news = await News.findById(req.params["id"]);
        // redisClient.set("id" + req.params["id"], JSON.stringify(news));
        res.send(news);
    } catch (e) {
        res.status(500).send(e);
    }
};

const getNews = async (req, res, next) => {
    const search_query = req.params["searchQuery"];
    try {
        const news = await News.find({
            title: { $regex: new RegExp(`${search_query}`, `i`) },
        });
        if (!news) {
            throw new Error("No matching news found");
        }
        // redisClient.setex("search" + search_query, 3600, JSON.stringify(news));
        res.send(news);
    } catch (e) {
        res.status(500).send(e);
    }
};

const listNews = async (req, res, next) => {
    let { genres, positivity, skip } = req.params;
    const genre_list = genres.split(",");

    try {
        const news = await News.find(
            {
                genre: { $in: genre_list },
                positivity_score: { $gte: positivity },
            },
            [
                "title",
                "link",
                "image_link",
                "summary",
                "positivity_score",
                "date",
                "genre",
            ],
            { sort: "-date", skip: Number(skip), limit: 12 }
        );
        if (news) {
            // redisClient.setex(
            //     genres + positivity + skip,
            //     900,
            //     JSON.stringify(news)
            // );
            res.send(news);
        } else {
            res.status(500).send("No news to show.");
        }
    } catch (err) {
        console.log(err);
    }
};

const postNews = async (req, res, next) => {
    const news_material = req.body;
    try {
        const news = await News.create(news_material);
        if (!news) {
            throw new Error("News not inserted.");
        }
        res.send(news);
    } catch (e) {
        res.status(500).send(e);
    }
};

module.exports = { getNewsById, getNews, postNews, listNews };
