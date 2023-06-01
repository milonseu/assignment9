const mongoose = require('mongoose');

//Defining Schema
const booksSchema = new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String,require: true},
    description:{type:String},
    publishYear:{type:Number}
})

//Compiling Schema
const bookModel= mongoose.model('book',booksSchema);

module.exports=bookModel;