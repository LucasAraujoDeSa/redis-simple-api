const { DataTypes } = require("sequelize")
const { sequelize } = require("../connection")

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const insert = async (title) => {
  const dog_post = await Post.create({title: title})

  try{
    const post = await dog_post.save()
    return post.toJSON()
  }catch (error) {
    console.error("foi nao chapa", error)
  }
}

module.exports = {
  insert
}
