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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={450}
            className="rounded-lg shadow-lg transform hover:scale-[1.05] transition duration-300"
          />
          {/* Decorative Glow */}
          <div className="absolute -inset-y-[10px] -inset-x-[10px] bg-green-400/20 blur-xl rounded-lg z-[0]"></div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">{product.name}</h1>
          <p className="mb-6 text-lg text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-2xl font-bold text-green-600 mb-6">${product.price.toFixed(2)}</p>

          {/* Call-to-Actions */}
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-[1.05]">
              Request Quote
            </button>
            <button className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 transform hover:scale-[1.05]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <section className="mt-16 bg-gradient-to-r from-green-50 to-white py-12 px-6 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Why Choose This Product?</h2>
        <p className="text-center text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          Our solar products are built with cutting-edge technology to ensure maximum efficiency and durability. Whether you're looking to power your home or business, this product is designed to meet your energy needs while reducing your carbon footprint.
        </p>
      </section>
    </main>
  );
}
