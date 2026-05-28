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

app.get('/feed', async(req,res)=>{
    try{
        const users = await User.find({})
        console.log(users);
        if(users.length === 0) {
            res.status(404).send("User not found")
        }else{
            res.send("Users found")
        }
    }catch(err){
        res.status(400).send("Something went wrong")
    }
})
app.get('/user', async(req,res)=>{
    try{
        const userEmailId = req.body.userEmailId;
        const user = await User.findOne({emailId:userEmailId}).exec();
        if(!user){
            res.status(400).send("User not found with "+ userEmailId);
        }
        res.send("User found")
    }catch(err){
        res.status(400).send("Something went wrong")
    }
})
app.delete('/user', async (req,res)=>{
    try{
        const userId = req.body.userId;
        console.log(userId)
        await User.findByIdAndDelete(userId);
        res.send("User deleted successfully")
    }catch(err){
        res.status(400).send("Something went wrong")
    }
})
app.patch("/user", async (req,res) =>{
    try{
        const userId = req.body.userId;
        const data = req.body;
        await User.findByIdAndUpdate(userId,data);
        res.send("User data updated successfully")
    }catch(err){
        res.status(400).send("Something went wrong")
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

