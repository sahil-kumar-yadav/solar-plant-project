// src/app/products/[id]/page.tsx

import Image from 'next/image';
import { products } from '../../data/products';

interface ProductPageProps {
    params: { id: string };
}

// Generate static paths for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

// Main component to render product details
export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return (
            <div className="text-center py-10 text-xl font-semibold">
                Product not found.
            </div>
        );
    }

    return (
        <main className="container mx-auto py-12 px-4">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="rounded-lg shadow-md"
                />
                <div className="mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="mb-4 text-gray-700">{product.description}</p>
                    <p className="text-xl font-semibold text-green-600 mb-4">
                        ${product.price.toFixed(2)}
                    </p>
                    <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300">
                        Request Quote
                    </button>
                </div>
            </div>
        </main>
    );
}
