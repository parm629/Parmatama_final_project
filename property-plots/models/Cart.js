import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    products: [
        {
            productId: mongoose.Schema.Types.ObjectId,
            quantity: Number,
        },
    ],
});

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);
