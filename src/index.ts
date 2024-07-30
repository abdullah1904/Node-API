import express, { Request, Response } from "express"
import { createClient } from 'redis';
import mongoose from "mongoose";
import { PORT, RedisHost, RedisPassword, RedisPort, connectionString } from "./config"
import { productRouter } from "./routes/productRoute";
import { categoryRouter } from "./routes/categoryRoute";

const app = express();

export const redisCache = createClient({
    password: RedisPassword,
    socket: {
        host: RedisHost,
        port: RedisPort
    }
});

app.use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use('/product', productRouter)
    .use('/category', categoryRouter)
    .get("/", (req: Request, res: Response) => {
        return res.status(200).send("Welcome to first Node API Project");
    });

mongoose.connect(connectionString, { dbName: 'NodeAPI' })
    .then((e) => {
        console.log("Connection Successful");
        app.listen(PORT, () => {
            console.log(`App is running on ${PORT} port`);
        });
    })
    .catch((e) => {
        console.log("Connection Failure");
        console.log(e);
    });

redisCache.connect()
    .then(() => {
        console.log('Redis client connected');
    })
    .catch((err) => {
        console.error('Redis client connection failed', err);
    });

export default app;