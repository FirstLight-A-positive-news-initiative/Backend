var express = require("express");
const { getUser, postUser } = require("../controllers/users");

var router = express.Router();

/* GET users listing. */
router.get("/:userId", getUser);
router.post("/", postUser);

module.exports = router;
