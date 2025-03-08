import Head from 'next/head'
import HeroSection from '../components/homepage/HeroSection';
import { products } from './data/products';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        {/* Featured Products Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-center text-3xl font-bold mb-8">Featured Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-green-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
