import Book from "../model/book.model.js";

export const getBook=(req,res)=>{
    try {
        const book =Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("error",error);
        res.status(500).json(error);
    }
}