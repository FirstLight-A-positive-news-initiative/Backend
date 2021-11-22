var express = require("express");
const { getUser, postUser, updatePreferences } = require("../controllers/users");

var router = express.Router();

/* GET users listing. */
router.get("/:userId", getUser);
router.post("/", postUser);
router.post("/preferences", updatePreferences);

module.exports = router;
