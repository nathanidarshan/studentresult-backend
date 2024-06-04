var mongoose = require('mongoose');

var resultschema = new mongoose.Schema({
    name:{
        type:String
    },
    rollno:{
        type:Number
    },
    sub1:{
        type:Number
    },
    sub2:{
        type:Number
    },
    sub3:{
        type:Number
    },
    sub4:{
        type:Number
    },
    total:{
        type:Number
    },
    per:{
        type:Number
    },
    min:{
        type:Number
    },
    max:{
        type:Number
    },
    std_id:{
        type:mongoose.Schema.Types.String,
        ref:"student"
    }

});

module.exports = mongoose.model('result',resultschema);