// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = new mongoose.Schema({
    email        : String
},{
    _id: false
});


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
