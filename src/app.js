const express = require('express');
const app = express();
const {adminAuth} = require('../middleware/auth');
// app.get(/a/,(req,res)=>{
//     res.send("testing ");
// })

// app.get("/user/:userId/:name/:pass?",(req,res)=>{
//     //console.log(req.query)
//     console.log(req.params)
//     res.send("Get user data sucessfully");
// })

app.use('/admin', adminAuth);

app.use('/admin/getAllData',(req,res)=>{
    // throw new Error('error found')
    res.send("get all data")
})

app.use('/admin/deleteUser',(req,res)=>{
    res.send("User deleted")
})


app.use("/test",(req,res)=>{
  res.send("Test Page");
});
app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send('Internal Server Error')
    }
})

app.listen(7777,()=>{
  console.log('Server is running on port 7777');
});