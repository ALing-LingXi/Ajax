const express = require("express")
const app = express()
app.get("/server",(req,res)=>{
  //设置响应头
  res.setHeader("Access-Control-Allow-Origin","*")
  console.log("query:", req.query)
  res.send("Hello AJAX")
})
app.listen(3000,()=>{
  console.log("已经启动");
})