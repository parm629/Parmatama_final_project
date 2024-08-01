import clientPromise from '../../../lib/mongodb';
import Product from '../../../models/Product';

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db("ecommerce");
        const products = await db.collection('products').find({}).toArray();
        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db("ecommerce");
        const product = await request.json();
        const result = await db.collection('products').insertOne(product);
        return new Response(JSON.stringify(result.insertedId), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
