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
      role: "Penata Kelola Teknologi Informasi",
      company: "PPI Curug (MagangHub)",
      period: "24 November 2025 - 23 Mei 2026",
      description: "Membantu pemeliharaan website internal dan belajar bekerja dalam lingkungan pengembangan perangkat lunak yang dinamis.",
      tech: ["Frontend Web Developer", "System Administration"] 
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Judul Section (Dengan Gradasi) */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Experience</span>
        </h2>

        {/* CONTAINER UTAMA */}
        <div className="relative space-y-12">
          
          {/* --- GARIS VERTIKAL --- */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              
              {/* --- TITIK DOT (Sekarang pakai Gradasi) --- */}
              <div className="absolute top-0 left-4 md:left-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full border-4 border-white shadow-md -translate-x-1/2 z-10"></div>

              {/* --- LAYOUT KONTEN --- */}
              <div className={`md:flex items-start justify-between ${exp.id % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* 1. Sisi Waktu (Desktop) */}
                <div className={`hidden md:block w-[45%] ${exp.id % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  {/* Teks waktu juga diberi gradasi agar senada */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold text-sm tracking-wider bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                    {exp.period}
                  </span>
                </div>

                {/* 2. Sisi Card (Konten Utama) */}
                <div className="ml-12 md:ml-0 md:w-[45%] bg-white border border-slate-100 p-6 rounded-2xl hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-xl relative">
                  
                  {/* Waktu (Mobile) */}
                  <span className="md:hidden inline-block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold text-xs bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    {exp.period}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {exp.role}
                  </h3>
                  
                  {/* Nama Perusahaan (Dengan Gradasi) */}
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-semibold text-sm mb-4">
                    {exp.company}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((item, idx) => (
                      <span key={idx} className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-default">
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