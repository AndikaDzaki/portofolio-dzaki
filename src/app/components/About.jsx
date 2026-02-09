import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Storytelling (Lebih Mengalir) */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Bagi saya, web development bukan sekadar menulis baris kode, melainkan seni 
              <span className="text-white font-semibold"> menerjemahkan ide menjadi realitas digital</span>. 
              Sebagai lulusan Teknik Informatika, saya memiliki fondasi logika yang kuat, namun hati saya 
              memilih jatuh cinta pada keindahan antarmuka (Frontend).
            </p>
            
            <p>
              Saya menikmati tantangan dalam menciptakan website yang tidak hanya berfungsi dengan baik, 
              tapi juga <span className="text-blue-400">cepat, responsif, dan nyaman digunakan</span>. 
              Spesialisasi saya saat ini adalah ekosistem <span className="text-white font-semibold">React & Next.js</span>, 
              di mana saya terus mengeksplorasi cara terbaik untuk membangun aplikasi web modern.
            </p>

            <p>
              Di luar layar monitor, saya adalah pembelajar yang antusias. Saya percaya bahwa teknologi 
              berkembang cepat, dan kemampuan beradaptasi adalah aset terbesar seorang developer. 
              Saya siap membawa semangat dan keahlian ini ke dalam tim yang inovatif.
            </p>
          </div>

          {/* Kolom Kanan: Info Cards */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Card 1: Education (Tetap, karena penting) */}
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">🎓 Education</h3>
              <p className="text-gray-400">S1 Teknik Informatika</p>
              <p className="text-blue-400 font-medium">Universitas Esa Unggul</p>
              <p className="text-sm text-gray-500 mt-1">Lulus 2025</p>
            </div>

            {/* Card 2: DIBAH DARI "Experience" JADI "Current Focus" */}
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">🚀 Current Focus</h3>
              <p className="text-gray-400">Frontend Engineering</p>
              <p className="text-blue-400 font-medium">React.js & Next.js Ecosystem</p>
              <p className="text-sm text-gray-500 mt-1">Responsive & Interactive UI</p>
            </div>

            {/* Card 3: Location (Tetap) */}
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">📍 Based in</h3>
              <p className="text-gray-400">Tangerang, Indonesia</p>
              <p className="text-sm text-gray-500 mt-1">Open for Remote / On-site</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;