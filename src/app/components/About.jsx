import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Me</span>
          </h2>
          {/* Garis bawah diubah menjadi gradasi agar senada */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Storytelling */}
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Bagi saya, web development bukan sekadar menulis baris kode, melainkan seni 
              <span className="text-slate-900 font-bold"> menerjemahkan ide menjadi realitas digital</span>. 
              Sebagai lulusan Teknik Informatika, saya memiliki fondasi logika yang kuat, namun hati saya 
              memilih jatuh cinta pada keindahan antarmuka (Frontend).
            </p>
            
            <p>
              Saya menikmati tantangan dalam menciptakan website yang tidak hanya berfungsi dengan baik, 
              tapi juga <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold">cepat, responsif, dan nyaman digunakan</span>. 
              Spesialisasi saya saat ini adalah ekosistem <span className="text-slate-900 font-bold">React & Next.js</span>, 
              di mana saya terus mengeksplorasi cara terbaik untuk membangun aplikasi web modern.
            </p>

            <p>
              Di luar layar monitor, saya adalah pembelajar yang antusias. Saya percaya bahwa teknologi 
              berkembang cepat, dan kemampuan beradaptasi adalah aset terbesar seorang developer.
            </p>
          </div>

          {/* Kolom Kanan: Info Cards */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Card 1: Education */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>
              <p className="text-slate-500">S1 Teknik Informatika</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold">Universitas Esa Unggul</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Lulus 2025</p>
            </div>

            {/* Card 2: Current Focus */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>🚀</span> Current Focus
              </h3>
              <p className="text-slate-500">Frontend Engineering</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold">React.js & Next.js Ecosystem</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Responsive & Interactive UI</p>
            </div>

            {/* Card 3: Location */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>📍</span> Based in
              </h3>
              <p className="text-slate-500">Tangerang, Indonesia</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold">Open for Remote / On-site</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;