const Book = require("../model/Book")


//books-controller
const getAllBooks = async(req,res)=>{
    let books;
    try{
     books = await Book.find();
    }catch(err){
     console.log(err)
    }
 
    if(!books){
     return res.status(404).json({message:"No Products Found"})
    }
    else{
     return res.status(200).json({books})
    }
}
//getById
const getById = async(req,res)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"No Book Found"})
    }
    else{
        return res.status(201).json({book})
    }
}

//addBook POST
const addBook = async(req,res)=>{
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    }
    catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(500).json({message:"Unable to Add"})
    }else{
        return res.status(201).json({book})
    }
    
}

//updateBook PUT
const updateBook = async(req,res) =>{
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();

    }
    catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"Unable to Update By Id"})
    }else{
        return res.status(200).json({message:"Products Successfully Deletd"})
    }
}

//deleteBook DELETE
const deleteBook = async(req,res) =>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndDelete(id);
    }
    catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"Unable to Delete By  this Id"})
    }else{
        return res.status(200).json({book})
    }
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;