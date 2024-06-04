var mongoose = require('mongoose');

var stdschema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    standed:{
        type:Number
    },
    div:{
        type:String
    },
    result_id:{
        type:mongoose.Schema.Types.String,
        ref:"result"
    }
})

module.exports = mongoose.model('student',stdschema);