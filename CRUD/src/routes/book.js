const express = require('express');
const router = express.Router();

const {getAllBook,getByIdbook,postBook,updateIdBook,deleteIdBook} = require('../controllers/bookController.js')

router.get('/books',getAllBook);

router.get('/books/:id',getByIdbook)

router.post('/books',postBook)

router.put('/books/:id',updateIdBook)

router.delete('/books/:id',deleteIdBook)

module.exports =router;