import clientPromise from '../../../lib/mongodb';
import Cart from '../../../models/Cart';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db();

    if (req.method === 'GET') {
        const cart = await db.collection('cart').findOne({});
        res.status(200).json(cart);
    } else if (req.method === 'POST') {
        const cart = await Cart.create(req.body);
        res.status(201).json(cart);
    }
}
