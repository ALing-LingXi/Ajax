const express = require("express")
const app = express()

// 解析请求体
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// POST /server
app.post("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  const data = { name: "xixihaha", age: "19", received: req.body }
  res.json(data)
})

// 处理预检请求
app.options("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.sendStatus(200)
})

// GET /delay
app.get("/delay", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  setTimeout(() => {
    res.send("我去你🐎的课后延时服务")
  }, 1000)
})

app.listen(5000, () => console.log("启动成功"))
