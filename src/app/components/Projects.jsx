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
      // GANTI INI dengan link repository atau live demo project-mu
      link: "https://sistempresuj.netlify.app/", 
      color: "from-blue-500/20 to-purple-500/20" // Warna glow di belakang gambar
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
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "Grocery Shop App",
      fullname: "E-Commerce Simulation",
      category: "Personal Project",
      description: "Simulasi aplikasi toko belanja online dengan fitur keranjang belanja, manajemen state yang kompleks, dan integrasi API produk dummy.",
      tech: ["React.js", "Redux/Context", "API Integration"],
      image: "/projects/grocery.jpg",
      // GANTI INI dengan link repository GitHub-nya
      link: "https://github.com/AndikaDzaki/repo-grocery-kamu",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Beberapa karya pilihan yang telah saya kerjakan, mulai dari proyek akademis hingga freelance profesional.
            </p>
        </div>

        {/* Project List - Zig Zag Layout */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            // WRAPPER UTAMA ADALAH LINK SUPAYA BISA DIKLIK SEMUA
            <Link 
                href={project.link} 
                key={project.id} 
                target="_blank"
                className={`group relative flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
                
              {/* --- BAGIAN GAMBAR (IMAGE SIDE) --- */}
              <div className="w-full md:w-3/5 relative">
                 {/* Glow Effect di belakang gambar */}
                 <div className={`absolute inset-0 -z-10 bg-gradient-to-tr ${project.color} blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-full scale-90`}></div>
                 
                 {/* Container Gambar */}
                 <div className="aspect-video relative rounded-2xl overflow-hidden border border-gray-800 group-hover:border-gray-600 shadow-2xl transition-all duration-500">
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Overlay saat hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                 </div>
              </div>

              {/* --- BAGIAN TEKS (CONTENT SIDE) --- */}
              <div className="w-full md:w-2/5 flex flex-col">
                 <span className="text-blue-400 font-mono text-sm mb-3 tracking-wider uppercase">{project.category}</span>
                 
                 <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                    {/* Ikon Panah yang bergerak saat hover */}
                    <ArrowUpRightIcon className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                 </h3>
                 
                 <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {project.description}
                 </p>

                 {/* Tech Stack Tags */}
                 <ul className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map((tech, idx) => (
                        <li key={idx} className="px-3 py-1 text-sm bg-gray-900 border border-gray-800 rounded-full text-gray-300 font-medium font-mono">
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
          <Link href="https://github.com/AndikaDzaki?tab=repositories" target="_blank" className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 border border-gray-700 hover:border-blue-500 rounded-full text-white font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-900/30">
            <span>Lihat Arsip Lainnya di GitHub</span>
            <ArrowUpRightIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;