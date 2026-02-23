import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    // Background diubah ke Slate-50 (putih keabu-abuan lembut)
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-slate-50 text-slate-900 py-20">
      
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* BAGIAN KIRI: TEKS */}
        <div className="flex-1 text-center md:text-left space-y-6">
          
          {/* Badge: Warna biru lebih kontras di bg terang */}
          <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            Available for Hire
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Hi, I'm <br className="hidden md:block" />
            
            {/* --- INI YANG DIUBAH MENJADI GRADIENT --- */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Andika Dzaki Ramadhan
            </span>
            {/* --------------------------------------- */}

          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto md:mx-0 font-medium">
            Informatics Engineering Graduate & <span className="text-slate-900">Frontend Developer</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <Link href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-200">
              Lihat Project
            </Link>
            <a href="/cv-dzaki.pdf" target="_blank" className="px-8 py-3 border-2 border-slate-200 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-all duration-300">
              Download CV
            </a>
          </div>
        </div>

        {/* BAGIAN KANAN: FOTO */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image 
              src="/pasphoto.png" 
              alt="Andika Dzaki"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;