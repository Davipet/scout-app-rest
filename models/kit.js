var mongoose = require('mongoose');

var Kit = mongoose.model('kit',{
    name:{
        type: String,
    },
    checkedIn: {
        type: Boolean
    }
})

module.exports={Kit}