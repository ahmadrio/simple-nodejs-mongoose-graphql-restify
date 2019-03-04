import mongoose from 'mongoose'
// import productModel from './product.model';

const OrderSchema = mongoose.Schema({
    productId: { type: String, required: true },
    userId: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true, default: 0 },
    grandTotal: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
})

// jika ada penambahan order, maka pada tabel product [quantity]-nya akan otomatis berkurang
// OrderSchema.pre('save', function (next) {
//     const order = this
//     const product = productModel
//     product.
// })

export default mongoose.model('orders', OrderSchema)
