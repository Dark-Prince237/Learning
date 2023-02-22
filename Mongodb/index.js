const express = require('express');
const app = express();

const mongoose = require('mongoose')


const db_link = 'mongodb+srv://wesafe:12345@cluster0.osz04f2.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
    console.log(db);
    console.log('db connected');
}).catch(function(err){
    console.log(err);
})


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },

    password:{
        type:String,
        requiredL:true,
        minLength:8 
    },

    confirmPassword:{
        type:String,
        required:true,
        minLength:8
    }
})


const userModel = mongoose.model('userModel', userSchema);

(async function createUser(){
    let user = {
        name:'mobile-partner',
        email:'rashidiqbal23705@gmail.com',
        password:'12345678',
        confirmPassword:'12345678'
    };

    let data = await userModel.create(user);
    console.log(data);

})()