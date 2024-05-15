const express = require("express");
const mongoose = require("mongoose");
const {PORT,connectionString} = require("./config");
const productRoute = require('./routes/productRoute.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    console.log("Home Page");
    return res.status(234).send("Welcome to first Node API Project");
});

app.use('/product',productRoute.router);


mongoose.connect(connectionString)
.then((e)=>{
    console.log("Connection Successful");
    app.listen(PORT,()=>{
        console.log(`App is running on ${PORT} port`);
    });
})
.catch((e)=>{
    console.log("Connection Failure");
    console.log(e);
});