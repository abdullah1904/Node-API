import { Request, Response } from "express";
import Category from "../models/categoryModel";
import { Types } from "mongoose";

const getCategories = async (req:Request, res:Response)=>{
    try{
        const categories = await Category.find({deleted: false});
        if(categories.length < 1){
            return res.status(404).json({ message: "Categories not found" });
        }
        res.status(200).json(categories);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const getCategory = async (req:Request, res:Response)=>{
    try{
        const { id } = req.params;
        if(!Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid Category Id'});
        }
        const category = await Category.findOne({_id: id, deleted:false});
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const createCategory = async (req:Request, res:Response)=>{
    try{
        const {name} = req.body;
        if(!name){
            return res.status(400).json({message: "Send all required fields"});
        }
        const category = await Category.create({name});
        res.status(201).json(category);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const updateCategory = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params;
        const {name} = req.body;
        if(!Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid Category Id'});
        }
        if(!name){
            return res.status(400).json({message: "Send all required fields"});
        }
        const category = await Category.findOneAndUpdate({_id:id,deleted:false},{name});
        if(!category){
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if(!Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid Category Id'});
        }
        const product = await Category.findOneAndUpdate({_id:id, deleted:false},{deleted:true});
        if (!product) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: `${product.name} deleted successfully` });
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export {createCategory, getCategories, getCategory, updateCategory, deleteCategory}