const redisClient = require("../db/redis");

const newsID = async (req, res, next) => {
    const id = req.params["id"];

    redisClient.get("id" + id, (err, data) => {
        if (err) throw err;

        if (data != null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
};

const fetchNewsByGenre = async (req, res, next) => {
    const { genres, positivity, skip } = req.params;

    redisClient.get(genres + positivity + skip, (err, data) => {
        if (err) throw err;

        if (data != null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
};

const searchNews = async (req, res, next) => {
    const search_query = req.params["searchQuery"];

    redisClient.get("search" + search_query, (err, data) => {
        if (err) throw err;

        if (data != null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
};

module.exports = { searchNews, newsID, fetchNewsByGenre };
