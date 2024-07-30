import mongoose from "mongoose";
import app from "../index";
import  request from "supertest";
import { connectionString } from "../config";

describe('Category Endpoints',()=>{
    beforeAll(async ()=>{
        await mongoose.connect(connectionString, {dbName:'NodeAPI'});
    });
    describe('Get All Products',()=>{
        it('Get All Products',async()=>{
            const response = await request(app).get('/category')
            expect(response.statusCode).toBe(200);
            // expect(response.body).toBe([])
        });
    })
    describe('Get Single Product',()=>{
        it('Get a Product',async()=>{
                const response = await request(app).get('/category/66a938e55a1772793aab6311')
                expect(response.statusCode).toBe(200);
                // expect(response.body).toMatchObject({"name": ""})
        })
    })
});