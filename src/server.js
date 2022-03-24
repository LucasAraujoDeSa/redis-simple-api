const express = require("express")
const { router } = require("./routes/index.js")


const app = express()
app.use(express.json())

app.use(router)


app.get("/", (req,res) => {
  res.status(200).json({data: "ok"})
})

app.listen(3333, () => {console.log("server runnig!!!@")})