import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    products: [mongoose.Schema.Types.ObjectId],
    totalAmount: Number,
    status: String,
    createdAt: Date,
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
