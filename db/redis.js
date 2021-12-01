const redis = require("redis");

const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient({
    url: process.env.REDIS_HOST,
    port: REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});

module.exports = client;
