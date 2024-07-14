import express, { Request, Response } from "express"
import mongoose from "mongoose";
import {PORT,connectionString} from "./config"
import {productRouter} from "./routes/productRoute"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req:Request,res:Response)=>{
    console.log("Home Page");
    return res.status(200).send("Welcome to first Node API Project");
});

app.use('/product',productRouter);

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