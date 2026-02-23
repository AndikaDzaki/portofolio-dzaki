import Link from "next/link";
import Image from "next/image";
// Kita pakai icon panah dari Heroicons (sudah include di Tailwind)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistem Absensi PWA (Skripsi)",
      fullname: "Rancang Bangun Absensi SDN Uwung Jaya dengan Penerapan Progressive Web Apps (PWA)",
      category: "Thesis Project",
      description: "Aplikasi absensi digital berbasis website yang dirancang menggunakan teknologi PWA. Memungkinkan akses offline, install ke homescreen, dan performa cepat layaknya aplikasi native.",
      tech: ["React.js", "PWA", "Express.js", "MySQL"],
      image: "/projects/sipres.png",
      link: "https://sistempresuj.netlify.app/", 
      color: "from-blue-400/30 to-teal-400/30" // Warna glow disesuaikan untuk light mode
    },
    {
      id: 2,
      title: "Prawira Hirya Website",
      fullname: "Modern Company Profile Web",
      category: "Freelance Project",
      description: "Website profesional untuk CV Prawira Hirya. Fokus pada desain UI/UX yang modern, responsif, dan representatif untuk meningkatkan branding perusahaan kepada klien.",
      tech: ["React.js", "Tailwind CSS", "UI/UX Design"],
      image: "/projects/prawira1.png",
      link: "https://www.prawirahirya.id/", 
      color: "from-teal-400/30 to-emerald-400/30"
    },
    {
      id: 3,
      title: "Grocery Shop App",
      fullname: "E-Commerce Simulation",
      category: "Personal Project",
      description: "Simulasi aplikasi toko belanja online dengan fitur keranjang belanja, manajemen state yang kompleks, dan integrasi API produk dummy.",
      tech: ["React.js", "Redux/Context", "API Integration"],
      image: "/projects/grocery.jpg",
      link: "https://github.com/AndikaDzaki/repo-grocery-kamu",
      color: "from-blue-400/30 to-cyan-400/30"
    },
    {
      id: 3,
      title: "Aviation Training & Learning Application System (ATLAS)",
      fullname: "Training Simulation",
      category: "Internship Project",
      description: ".",
      tech: ["React.js", "Redux/Context", "API Integration"],
      image: "/projects/atlas.png",
      link: "https://github.com/AndikaDzaki/repo-grocery-kamu",
      color: "from-blue-400/30 to-cyan-400/30"
    }
  ];

  return (
    // Background diubah ke Putih Murni
    <section id="projects" className="py-24 px-4 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Projects</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-lg">
                Beberapa karya pilihan yang telah saya kerjakan, mulai dari proyek akademis hingga freelance profesional.
            </p>
        </div>

        {/* Project List - Zig Zag Layout */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <Link 
                href={project.link} 
                key={project.id} 
                target="_blank"
                className={`group relative flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
                
              {/* --- BAGIAN GAMBAR (IMAGE SIDE) --- */}
              <div className="w-full md:w-3/5 relative">
                 {/* Glow Effect di belakang gambar (Opacity disesuaikan untuk background putih) */}
                 <div className={`absolute inset-0 -z-10 bg-gradient-to-tr ${project.color} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-full scale-90`}></div>
                 
                 {/* Container Gambar (Border Slate & Shadow Halus) */}
                 <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-200 group-hover:border-teal-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-teal-500/10 transition-all duration-500 bg-slate-50">
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Overlay saat hover (Diubah ke putih transparan) */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></div>
                 </div>
              </div>

              {/* --- BAGIAN TEKS (CONTENT SIDE) --- */}
              <div className="w-full md:w-2/5 flex flex-col">
                 {/* Kategori dengan Gradasi */}
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold font-mono text-sm mb-3 tracking-wider uppercase">
                   {project.category}
                 </span>
                 
                 {/* Judul Project */}
                 <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2 text-slate-900 group-hover:text-teal-600 transition-colors">
                    {project.title}
                    {/* Ikon Panah (Warna Teal) */}
                    <ArrowUpRightIcon className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-teal-500 transition-all duration-300" />
                 </h3>
                 
                 <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {project.description}
                 </p>

                 {/* Tech Stack Tags (Clean style) */}
                 <ul className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map((tech, idx) => (
                        <li key={idx} className="px-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-full text-slate-600 font-medium font-mono group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-teal-700 transition-colors">
                            {tech}
                        </li>
                    ))}
                 </ul>
              </div>

            </Link>
          ))}
        </div>

        {/* "More Projects" Button */}
        <div className="text-center mt-24">
          <Link href="https://github.com/AndikaDzaki?tab=repositories" target="_blank" className="group inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-teal-400 rounded-full text-slate-700 font-bold transition-all duration-300 hover:text-teal-600 hover:bg-teal-50 shadow-sm hover:shadow-md">
            <span>Lihat Arsip Lainnya di GitHub</span>
            <ArrowUpRightIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;