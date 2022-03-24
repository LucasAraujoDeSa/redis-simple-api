const { insert } = require("../database/models/Post.js")
const { set } = require("../database/repository/redis-repo.js")

const create_post = async (title) => {
  if(!title){
    throw new Error("ta sem titulo, vai nao!!!")
  }

  const post = await insert(title)
  await set(`post-${post.id}`, JSON.stringify(post))


  return post
}

module.exports = {
  create_post
}