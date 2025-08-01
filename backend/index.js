import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const PORT = 3000;
const app = express();
const MONGO_URI = process.env.MONGO_URI;

app.get ('/', (req,res)=>{
    res.send("Blog")
})

//mongodb connection mamee
mongoose.connect(MONGO_URI,{
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
})



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`); 
})