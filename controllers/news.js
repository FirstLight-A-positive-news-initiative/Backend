const News = require("../models/news");

const getNews = async (req, res, next) => {

    const search_query = req.params["search_query"];
    try {
        const news = await News.find(
            {
                title: { $regex: new RegExp(`${search_query}`, `i`) }
            }
        )
        if (!news) {
            throw new Error("No matching news found");
        }
        res.send(news);
    } catch (e) {
        res.status(500).send(e);
    }
};

const postNews = async (req, res, next) => {

    const news_material = req.body;
    try {
        const news = await News.create(news_material);
        if(!news) {
            throw new Error("News not inserted.");
        }
        res.send(news);
    } catch(e) {
        res.status(500).send(e);
    } 
};


module.exports = { getNews, postNews };