const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://devtinderLatest:QKIeIWuTu0pP2f8h@cluster0.wyy19va.mongodb.net/devTinderLatest')
}

module.exports = connectDB;