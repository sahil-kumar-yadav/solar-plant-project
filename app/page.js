import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/homepage/HeroSection';
import { products } from './data/products';

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Products Section */}
        <section className="bg-gradient-to-b from-yellow-50 via-orange-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-extrabold text-orange-600 mb-6">
              Explore Our Solar Products
            </h2>
            <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              Discover high-quality solar panels, inverters, batteries, and EV chargers designed to power your home or business efficiently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    {/* Product Image */}
                    <div className="relative overflow-hidden h-[250px]">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-lg font-bold text-green-600">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="mt-4 text-sm text-gray-500 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Switch to Solar Today</h2>
            <p className="mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Take the first step toward energy independence. Contact us now to get a free consultation and start saving on your energy bills with our reliable solar solutions.
            </p>
            <Link href="/booking">
              <button className="bg-white text-orange-700 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-[1.05]">
                Book Your Installation Now
              </button>
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-b from-green-50 via-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-[6px] border-yellow-400">
                <p className="text-gray-600 italic mb-4">
                  "Switching to solar was the best decision I ever made. The installation was seamless, and my energy bills have dropped significantly!"
                </p>
                <h4 className="font-bold text-gray-800">John Doe</h4>
                <span className="text-sm text-gray-500">Homeowner</span>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-[6px] border-orange-500">
                <p className="text-gray-600 italic mb-4">
                  "Their team was professional and knowledgeable. I highly recommend their solar solutions for anyone looking to save money."
                </p>
                <h4 className="font-bold text-gray-800">Jane Smith</h4>
                <span className="text-sm text-gray-500">Business Owner</span>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-[6px] border-green-500">
                <p className="text-gray-600 italic mb-4">
                  "The quality of their solar panels is top-notch. I’m thrilled with the results and the impact on my carbon footprint."
                </p>
                <h4 className="font-bold text-gray-800">Michael Lee</h4>
                <span className="text-sm text-gray-500">Eco Enthusiast</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
