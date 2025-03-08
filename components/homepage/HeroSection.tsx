import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-green-500 to-green-700 py-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="text-white md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Power Your Home with <span className="text-yellow-400">Solar Energy</span>
          </h1>
          <p className="mb-8 text-lg text-gray-100 leading-relaxed">
            Reduce your energy bills and carbon footprint with our reliable, high-quality solar solutions tailored to your needs.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.05]">
              Request a Quote
            </button>
            <button className="bg-white text-green-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-[1.05]">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative">
          <Image
            src="/solar-home.png"
            alt="Solar Energy"
            width={550}
            height={450}
            className="rounded-lg shadow-xl transform hover:scale-[1.05] transition duration-300"
          />
          {/* Decorative Glow */}
          <div className="absolute -inset-y-[10px] -inset-x-[10px] bg-yellow-400/20 blur-xl rounded-full z-[0]"></div>
        </div>
      </div>
    </section>
  );
}
