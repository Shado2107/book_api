const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
       title: {
            type: String,
            require: true,
            unique: true
       } ,
       author: {
            type: String,
            required: true
       },
       editor: {
            type: String,
            required:true
       },
       year: {
            type: Number
       }, 
       description: {
            type: String
       }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('book', bookSchema)