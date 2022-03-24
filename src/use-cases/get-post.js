const { get } = require("../database/repository/redis-repo.js")

const get_post = async (id) => {
  const post = await get(`post-${id}`)
  
  return JSON.parse(post)
}

module.exports = {
  get_post
}