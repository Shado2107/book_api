const mongoose = require("mongoose");

const userVerificationSchema = mongoose.Schema(
    {
       userId: {
            type: String,         
       } ,
       uniqueString: {
            type: String,       
       },
       createdAt: {
            type: Date,     
       },
       expireAt: {
            type: Date,       
       } 
    }
);

module.exports = mongoose.model('userverification', userVerificationSchema)