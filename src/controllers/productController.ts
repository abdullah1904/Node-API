import { Request, Response } from "express";
import Product from "../models/productModel";
import { Types } from "mongoose";

const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({deleted: false}).populate('category');
        if(products.length < 1){
            return res.status(404).json({ message: "Products not found" });
        }
        res.status(200).json(products);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if(!Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid Product Id'});
        }
        const product = await Product.findOne({_id:id, deleted:false}).populate('category');
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        const {name, quantity, price, category} = req.body;
        if(!name){
            return res.status(400).json({message: "Send all required fields"});
        }
        const product = await Product.create({name,quantity,price,category});
        res.status(200).json(product);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {name, quantity, price, category} = req.body;
        if(!Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid Category Id'});
        }
        if(!name){
            return res.status(400).json({message: "Send all required fields"});
        }
        const product = await Product.findOneAndUpdate({_id:id,deleted:false}, {name,quantity,price,category});
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if(!Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid Category Id'});
        }
        const product = await Product.findOneAndUpdate({_id:id, deleted:false},{deleted:true});
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: `${product.name} deleted successfully` });
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };