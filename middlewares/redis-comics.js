const redisClient = require("../db/redis");

const getComicsCache = async (req, res, next) => {
    let name = req.params["name"];
    const page = req.query.page;
    redisClient.get("comics" + name + page, (err, data) => {
        if (err) throw err;

        if (data != null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
};

const getComicByIDCache = async (req, res, next) => {
    const { id } = req.params;
    redisClient.get("comic" + id, (err, data) => {
        if (err) throw err;

        if (data != null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
};

module.exports = { getComicsCache, getComicByIDCache };
