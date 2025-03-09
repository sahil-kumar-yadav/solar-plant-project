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

        {/* Featured Products */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-extrabold text-green-700 mb-4">
              Premium Solar Solutions
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              High-quality solar panels, inverters, batteries, and EV chargers designed for maximum efficiency and reliability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl hover:-translate-y-3 duration-300 cursor-pointer">
                    <div className="relative h-[250px] overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-lg font-semibold text-green-600">${product.price.toFixed(2)}</p>
                      <p className="mt-3 text-gray-500 line-clamp-2">{product.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-500 to-green-700 py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready To Embrace Solar?</h2>
            <p className="mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Join thousands who've switched to solar energy. Book your installation today and start saving immediately.
            </p>
            <Link href="/booking">
              <button className="bg-white text-green-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-[1.05]">
                Schedule Your Installation
              </button>
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-[6px] border-green-500">
                <p className="italic text-gray-600 mb-4">"Switching to solar was the best decision I've made. The savings are incredible!"</p>
                <h4 className="font-bold">John Doe</h4>
                <span className="text-sm text-gray-500">Homeowner</span>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-[6px] border-yellow-400">
                <p className="text-gray-600 italic mb-4">
                  "Professional team, excellent service, and great savings on my bills. Highly recommended!"
                </p>
                <h4 className="font-bold text-gray-800">Jane Smith</h4>
                <span className="text-sm text-gray-500">Business Owner</span>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-[6px] border-orange-500">
                <p className="text-gray-600 italic mb-4">
                  "Top-notch solar panels and professional installation. My energy costs have never been lower!"
                </p>
                <h4 className="font-bold text-gray-800">Michael Lee</h4>
                <span className="text-sm text-gray-500">Eco Enthusiast</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-x-[60px] items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-[40px] font-extrabold mb-[30px] text-orange-600">Why Choose Our Solar Solutions?</h2>

              <ul className="space-y-[20px] text-lg text-gray-[700] list-disc pl-[20px] leading-relaxed">
                <li>Expert installation by certified professionals.</li>
                <li>High-quality products with industry-leading warranties.</li>
                <li>Personalized solutions tailored to your needs.</li>
                <li>Exceptional customer support before and after installation.</li>
              </ul>

              {/* CTA Button */}
              <Link href="/support" passHref legacyBehavior>
                <button type='button' role='link' aria-label='Contact Us' tabIndex={0}
                  className='mt-[30px] bg-green-[600] text-white px-[32px] py-[12px] rounded-full shadow-lg hover:bg-green-[700] transition duration-[300ms] transform hover:scale-[1.05]'>
                  Contact Us Today
                </button>
              </Link>

              {/* Image */}
              <div className='flex justify-center items-center mt-[40px] md:mt-[0px]'>
                <Image src='/solar-team.png' alt='Our Team' width={550} height={400}
                  className='rounded-xl shadow-xl transform hover:scale-[1.05] transition duration-[300ms]' />
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
