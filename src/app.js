const express = require('express');
const app = express();

app.use("/hello",(req,res)=>{
  res.send("Hello World");
});

app.use("/test",(req,res)=>{
  res.send("Test Page");
});

app.get("/",(req,res)=>{
  res.send("Main Page");
});

app.listen(7777,()=>{
  console.log('Server is running on port 7777');
});