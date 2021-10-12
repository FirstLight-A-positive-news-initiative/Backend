const { Entertainment, Sports, Politics, Technology, Science } = require("../models/news");

const getNews = async (req, res, next) => {
    const search_query = req.params.search_query;

    try {
        const news = await Entertainment.findByTitle(search_query);
        console.log(news);
        if (!news) {
            throw new Error("No matching news found");
        }
        res.send(news);
    } catch (e) {
        res.status(500).send(e);
    }
};

const getCollection = (genre) => {
    switch(genre) {
        case "entertainment":
            return Entertainment;
            break;
        case "sports":
            return Sports;
            break;
        case "science":
            return Science;
            break;
        case "politics":
            return Politics;
            break;
        case "technology":
            return Technology;
            break;
    }
}

const postNews = async (req, res, next) => {
    const news_material = req.body;
    const { genre } = news_material;

    delete news_material["genre"];

    try {
        const news = await getCollection(genre).create(news_material);
        if(!news) {
            throw new Error("News not inserted.");
        }
        res.send(news);
    } catch(e) {
        res.status(500).send(e);
    } 
};


module.exports = { getNews, postNews };