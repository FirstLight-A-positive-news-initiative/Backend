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
        res.status(400).send();
    }
};

module.exports = { getUser };
