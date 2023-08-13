var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Number
    }
    
});

var Page = module.exports = mongoose.model('User', UserSchema);