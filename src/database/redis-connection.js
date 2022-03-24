const Redis = require("ioredis");

const redis = new Redis({
  password: "pass"
});



module.exports = {
  redis
}