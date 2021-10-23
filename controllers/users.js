var User = require("../models/user");

const getUser = async (req, res, next) => {
    const email = req.params["userId"];
    try {
        const user = await User.findByEmail(email);
        if (!user) {
            throw new Error("No such user found");
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
};

const postUser = async (req, res, next) => {
    try {
        const user = await User.create([req.body]);
        console.log(user);
        if (!user) {
            throw new Error("User not inserted");
        }
        res.send(user);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

module.exports = { getUser, postUser };
