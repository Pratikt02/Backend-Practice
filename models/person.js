const mongoose=require('mongoose');

//Define the person Schema

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    Salary:{
        type:Number,
        required:true
    }

})

//Create Person model

const person=mongoose.model('person',personSchema);
module.exports=person;