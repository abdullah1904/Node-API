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
    image: {
        type: Number,
        required: false,
    }
}, {timestamps: true});

const Product = model("Products", ProductSchema);
export default Product;