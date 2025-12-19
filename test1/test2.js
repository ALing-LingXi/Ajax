const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.post("/server",(req,res)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
  const data={name:"xixihaha",age:"19"}
  res.send(JSON.stringify(data))
})
app.get("/delay",(req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  setTimeout(()=>{
    res.send("我去你🐎的课后延时服务");
  },1000)
})
app.get("/server",(req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  setTimeout(()=>{
    res.send("我去你🐎的课后延时服务");
  },1000)
})
app.listen(4000,()=>{
  console.log("启动成功");
})
