import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-green-700 to-green-500 py-24 overflow-hidden">
      {/* Background Solar Panel Image */}
      <div className="absolute inset-0">
        <Image
          src="/roof-solar2.png" // Replace with a high-quality solar panel background image
          alt="Solar Energy Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-white lg:w-1/2 space-y-6">
          <h1 className="text-[48px] lg:text-[64px] font-extrabold leading-tight">
            Empower Your Future with <span className="text-yellow-400">Solar Energy</span>
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
            Harness the power of the sun to reduce your energy bills and create a sustainable future. Join thousands of satisfied customers today.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.05]">
              Get a Free Quote
            </button>
            <button className="bg-white text-green-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-[1.05]">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-[50%] flex justify-center relative">
          {/* Solar Panel Image */}
          <Image
            src="/hero-section.png" // Replace with your product or solar panel image
            alt="Solar Energy Solutions"
            width={600}
            height={500}
            className="rounded-xl shadow-xl transform hover:scale-[1.05] transition duration-300"
          />
          {/* Decorative Glow */}
          <div className="absolute -inset-y-[20px] -inset-x-[20px] bg-yellow-500/20 blur-xl rounded-full z-[0]"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[10%] right-[5%] w-[100px] h-[100px] bg-yellow-400/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-[15%] left-[10%] w-[150px] h-[150px] bg-blue-500/20 rounded-full blur-xl"></div>
    </section>
  );
}
