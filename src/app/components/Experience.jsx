const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Freelance Web Developer",
      company: "Prawira Hirya",
      period: "Project Based",
      description: "Merancang dan membangun website modern untuk Prawira Hirya. Fokus pada pembuatan antarmuka yang responsif, pemilihan palet warna modern, dan optimasi pengalaman pengguna (UX).",
      tech: ["React.js", "Tailwind CSS", "UI/UX Design"]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "PT. Educa Sisfomedia Indonesia",
      period: "Februari 2024 - Juni 2024",
      description: "Bertanggung jawab mengembangkan fitur frontend, memastikan desain pixel-perfect sesuai mockup, dan melakukan debugging untuk meningkatkan performa aplikasi web.",
      tech: ["JavaScript", "Frontend Development", "Team Collaboration"]
    },
    {
      id: 3,
      role: "Penata Kelola Teknologi Informasi", // Saya sesuaikan dengan gambar
      company: "PPI Curug (MagangHub)",
      period: "November 2025 - Selesai",
      description: "Membantu pemeliharaan website internal dan belajar bekerja dalam lingkungan pengembangan perangkat lunak yang dinamis.",
      tech: ["Frontend Web Developer", "System Administration"]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Work <span className="text-blue-500">Experience</span>
        </h2>

        {/* CONTAINER UTAMA (Relative untuk patokan posisi garis) */}
        <div className="relative space-y-12">
          
          {/* --- GARIS VERTIKAL (THE LINE) --- */}
          {/* Mobile: Di kiri (left-4) | Desktop: Di tengah (left-1/2) */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-1 bg-gray-800 -translate-x-1/2"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              
              {/* --- TITIK DOT (THE DOT) --- */}
              {/* Posisinya mengikuti garis: left-4 di mobile, left-1/2 di desktop */}
              <div className="absolute top-0 left-4 md:left-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/50 -translate-x-1/2 z-10"></div>

              {/* --- LAYOUT KONTEN (KIRI - KANAN) --- */}
              <div className={`md:flex items-start justify-between ${exp.id % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* 1. Sisi Waktu (Hanya Tampil di Desktop) */}
                <div className={`hidden md:block w-[45%] ${exp.id % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="text-blue-400 font-mono text-sm tracking-wider border border-blue-900 bg-blue-900/20 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                {/* 2. Sisi Card (Konten Utama) */}
                {/* Di Mobile kita kasih margin-left (ml-12) supaya tidak ketabrak garis */}
                <div className="ml-12 md:ml-0 md:w-[45%] bg-black border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 relative">
                  
                  {/* Waktu (Hanya muncul di Mobile) */}
                  <span className="md:hidden inline-block mb-3 text-blue-400 font-mono text-xs border border-blue-900 bg-blue-900/20 px-2 py-1 rounded-full">
                    {exp.period}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((item, idx) => (
                      <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;