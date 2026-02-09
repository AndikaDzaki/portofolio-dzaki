import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Container Utama */}
      <div className="max-w-3xl space-y-6">
        
        {/* Badge Kecil */}
        <div className="inline-block px-3 py-1 text-sm font-medium text-blue-400 bg-blue-900/30 rounded-full border border-blue-800">
          Available for Hire
        </div>

        {/* Headline Besar */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Andika Dzaki Ramadhan</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-400">
          Informatics Engineering Graduate & Frontend Developer.
          
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
            Lihat Project
          </Link>
          <a href="/cv-dzaki.pdf" target="_blank" className="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;