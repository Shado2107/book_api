const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
       name: {
            type: String,
            require: true
       } ,
       surname: {
            type: String,
            required: true
       },
       username: {
            type: String,
            required:true
       },
       email: {
            type: String,
            required: true
       }, 
       password: {
            type: String
       }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('user', userSchema)