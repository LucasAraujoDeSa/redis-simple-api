const { Router } = require("express")
const { post_controller } = require("../controllers/post-controller")

const router = Router()


router.post("/post", post_controller.post)
router.get("/post/:id", post_controller.get)

module.exports = {
  router
}