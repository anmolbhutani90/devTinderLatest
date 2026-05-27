const express = require('express');
const app = express();

// app.get(/a/,(req,res)=>{
//     res.send("testing ");
// })

app.get("/user/:userId/:name/:pass?",(req,res)=>{
    //console.log(req.query)
    console.log(req.params)
    res.send("Get user data sucessfully");
})

app.post("/user",(req,res)=>{
    res.send("User data sucessfully saved to DB");
})

app.delete("/user",(req,res)=>{
    res.send("User data deleted sucessfully")
})


app.use("/test",(req,res)=>{
  res.send("Test Page");
});


app.listen(7777,()=>{
  console.log('Server is running on port 7777');
});