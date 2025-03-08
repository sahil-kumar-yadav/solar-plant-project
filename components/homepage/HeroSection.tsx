// src/components/homepage/HeroSection.tsx

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-white md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Power Your Home with Solar Energy
          </h1>
          <p className="mb-6 text-lg">
            Reduce your energy bills and carbon footprint with our reliable solar solutions.
          </p>
          <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300">
            Request a Quote
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/solar-home.png"
            alt="Solar Energy"
            width={500}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
