import clientPromise from '../../../lib/mongodb';
import Order from '../../../models/Order';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db();

    if (req.method === 'GET') {
        const orders = await db.collection('orders').find({}).toArray();
        res.status(200).json(orders);
    } else if (req.method === 'POST') {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    }
}
