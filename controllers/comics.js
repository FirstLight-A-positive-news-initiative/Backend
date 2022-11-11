const Comics = require("../models/comics");
// const redisClient = require("../db/redis");

const namemap = (name) => {
    if (name == "dilbert") return "Dilbert";
    else if (name == "garfield") return "Garfield";
    else if (name == "calvinandhobbes") return "Calvin and Hobbes";
    else if (name == "peanuts") return "Peanuts";
    else if (name == "bignate") return "Big Nate";
    else if (name == "luann") return "Luann";
};

const getComics = async (req, res, next) => {
    let name = req.params["name"];
    const page = req.query.page;
    if (name == "home") {
        try {
            const comics = await Comics.find(
                {},
                ["name", "link", "date", "source"],
                { sort: "-date", skip: 12 * Number(page), limit: 12 }
            );
            if (!comics) {
                throw new Error("No matching Comic names found");
            }
            // redisClient.setex(
            //     "comics" + name + page,
            //     3600,
            //     JSON.stringify(comics)
            // );
            res.send(comics);
        } catch (e) {
            res.status(500).send(e);
        }
    } else {
        try {
            name = namemap(name);
            const comics = await Comics.find(
                { name: name },
                ["name", "link", "date", "source"],
                { sort: "-date", skip: 12 * Number(page), limit: 12 }
            );
            if (!comics) {
                throw new Error("No matching Comic names found");
            }
            // redisClient.setex(
            //     "comics" + name + page,
            //     3600,
            //     JSON.stringify(comics)
            // );
            res.send(comics);
        } catch (e) {
            res.status(500).send(e);
        }
    }
};

const getSingleComic = async (req, res) => {
    const { id } = req.params;

    try {
        const comic = await Comics.findById(id);
        // redisClient.set("comic" + id, JSON.stringify(comic));
        res.status(200).send(comic);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { getComics, getSingleComic };
