import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './route/book.route.js';

 const app = express();
dotenv.config();
 const PORT=process.env.PORT || 8000;
 const URI =process.env.MongoDBURI;

 
//connect to mongo db
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("connected to mongodb")
} catch (error) {
  console.log("error")
  
}
app.use("/book",bookRoute); 
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})