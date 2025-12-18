const express = require("express")
const app = express()
app.post("/server",(req,res)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
  const data={name:"xixihaha",age:"19"}
  res.send(JSON.stringify(data))
})
app.listen(4000,()=>{
  console.log("启动成功");
})