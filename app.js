const express=require('express');
const mongoose=require('mongoose');
var aliansRouter=require('./routes/alians.js');
const url="mongodb://localhost/AlientDB"
var app=express();

app.use(express.json());
app.use('/alians',aliansRouter);


mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection;

con.on('open',()=>{
    console.log("Connection...");
})
app.listen(3000,()=>{console.log("Server Running")});