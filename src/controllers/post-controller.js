const { create_post } = require(
  "../use-cases/create-post.js"
) 

const { get_post } = require(
  "../use-cases/get-post.js"
) 

const post_controller = {
  async post(req, res){
    try{
      const { title } = req.body

      const post = await create_post(title)

      return res.status(201).json({
        data: post
      })
    }catch(error){
      return res.status(500).json({data: error})
    }
  },

  async get(req, res){
    try{
      const { id } = req.params

      const post = await get_post(id)

      return res.status(200).json({
        data: post
      })
    }catch(error){
      return res.status(500).json({data: error})
    }
  }
}

module.exports = {
  post_controller
}