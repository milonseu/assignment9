const bookModel = require('../models/books.js');

const getAllBook=async(req,res)=>{
    try {
        const data = await bookModel.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
}

const getByIdbook=async(req,res)=>{
    try {
       const id = req.params.id
       const data = await bookModel.findById(id);
       res.status(200).json(data);
   } catch (error) {
       console.log(error)
   }
}

const postBook=async(req,res)=>{
    try {
        const book= new bookModel({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            publishYear: req.body.publishYear
        });
        const result = await book.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const updateIdBook=async(req,res)=>{
    try {
       const id= req.params.id;
       const data = req.body;
       const options = {new:true};
       const result = await bookModel.findByIdAndUpdate(id,data,options);
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({error:error.message})
   }
}

const deleteIdBook=async(req,res)=>{
    try {
        const id = req.params.id;
        const result =await bookModel.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted Successfully"});
    } catch (error) {
        console.log(error)
    }
}

module.exports={getAllBook,getByIdbook,postBook,updateIdBook,deleteIdBook};

