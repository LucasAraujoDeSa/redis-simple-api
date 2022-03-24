const { redis } = require("../redis-connection.js")

const set = async (key, value) => {
  try{
    await redis.set(key, value)
  }catch(error){
    console.error(error)
  }
}

const get = async (key) => {
  try{
    const value = redis.get(key)
    return value
  }catch(error){
    console.error(error)
  }
}

module.exports = {
  set,
  get
}