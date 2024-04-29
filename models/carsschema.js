const mongoose = require("mongoose")

const carschema = new mongoose.Schema({
    carname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    cost:{
        type:String,
        required:true,
    },
    milage:{
        type:Number,
        required:true,
    },
    type:{   //manual or automatic
        type:String,
    },
    model:{
        type:String,
        required:true,
    },
    fuel:{
        type:String,
        required:true,
    },
    image:{
        data:Buffer,
        contentType:String,
    },
});
const cars = mongoose.model('car',carschema);
module.exports = cars;