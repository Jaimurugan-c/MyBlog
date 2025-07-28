import express from 'express';
import mongoose from 'mongoose';
import userSchema from  './models/user.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config(); // env 

 app.use(express.json());
 const PORT = process.env.PORT || 3000;


 //Api
 app.get('/',(req,res)=>{
    res.send('Hllo!');
 })

 

 //Db
mongoose.connect(process.env.MONGO_URI, {

}).then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));


 

 app.listen (PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 })