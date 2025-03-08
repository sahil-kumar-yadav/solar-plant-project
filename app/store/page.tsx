// src/app/store/page.tsx

'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import axios from 'axios';

export default function StorePage() {
    const handleCheckout = async (product: any) => {
        try {
            const response = await axios.post('/api/checkout', [product]);
            window.location.href = response.data.session;
        } catch (error) {
            console.error('Checkout Error:', error);
            alert('Checkout failed, please try again.');
        }
    };

    return (
        <main className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Solar Products Store</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={400}
                            height={300}
                            className="rounded"
                        />
                        <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        <button
                            onClick={() => handleCheckout(product)}
                            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                        >
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
