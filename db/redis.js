const redis = require("redis");

const REDIS_PORT = process.env.PORT || 6379;
console.log(REDIS_PORT);

const client = redis.createClient(REDIS_PORT);

module.exports = client;
