const express = require('express');
const connectDB = require('../config/database')
const app = express();
const User = require('../model/user');

app.use(express.json());

app.post("/signup", async(req,res)=>{
    //creating an instance of the User model
    const user = new User(req.body)
    try{
        await user.save();
        res.status(200).send("User added successfully");
    }catch(err){
        res.status(400).send("Error in user adding" + err.message)
    }
    

})


connectDB()
.then(()=>{
    app.listen(7777,()=>{
        console.log('Server is running on port 7777');
    });
    console.log('DB connected successfully')
}).catch((err)=>{
    console.error("DB connection failed")
})

