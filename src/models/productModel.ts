import { Schema, model} from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    deleted: {
        type: Boolean, 
        default: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {timestamps: true});

const Product = model("Products", ProductSchema);
export default Product;