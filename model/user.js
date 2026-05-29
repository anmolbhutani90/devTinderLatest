const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    lastName:{
        type: String,
        maxLength: 50
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxLength:80
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
        maxLength: 50
    },
    age:{
        type: Number,
        min: 18,
        max: 60
    },
    gender:{
        type: String,
        maxLength: 20,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error('Gender data is not valid')
            }
        }
    },
    photoUrl:{
        type: String,
        maxLength: 400,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    about:{
        type: String,
        default: "Hey there! I am using DevTinder.",
        maxLength: 250
    },
    skills:{
        type: [String]
    }

},{
    timestamps: true
});

module.exports = mongoose.model('User',userSchema);