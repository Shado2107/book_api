const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
       name: {
            type: String,
           
       } ,
       surname: {
            type: String,
            
       },
       username: {
            type: String,
            required:true,
            unique: true
       },
       email: {
            type: String,
            
       }, 
       password: {
            type: String,
            required: true
       }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('user', userSchema)