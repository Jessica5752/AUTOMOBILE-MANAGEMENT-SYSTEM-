const mongoose = require("mongoose")

const customerschema = new mongoose.Schema({
    username:{
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
        required:true,
    },
    contact:{
        type:String,
        required:true,
        unique:true
    },
});
const customer = mongoose.model('customer',customerschema);
module.exports = customer;