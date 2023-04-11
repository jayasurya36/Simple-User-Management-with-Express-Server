const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    isPromoted : {
        type : Boolean,
        default : null
    }
});

module.exports = mongoose.model("User" , userSchema);