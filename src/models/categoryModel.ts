import { model, Schema } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"]
    },
    deleted: {
        type: Boolean, 
        default: false
    },
},{timestamps: true});

const Category = model('Category',CategorySchema);

export default Category;