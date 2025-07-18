import express from 'express';
import mongoose from 'mongoose';
const app = express();


 app.use(express.json());
 const PORT = process.env.PORT || 3000;

 app.get('/',(req,res)=>{
    res.send('Hllo!');
 })



 //Db
 mongoose.connect("mongodb://localhost:27017/MineBlog",{
     
   }).then(() => {
      console.log("Connected to MongoDB");
   }).catch((err) => {
      console.error("Error connecting to MongoDB:", err);
 })
 

 app.listen (PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 })