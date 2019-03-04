import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
})

export default mongoose.model('products', ProductSchema)
