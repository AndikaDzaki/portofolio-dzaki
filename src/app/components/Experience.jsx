const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Information System and Technology Governance",
      company: "Politeknik Penerbangan Indonesia Curug (Maganghub)",
      period: "Nov 2025 - Present",
      description: "Designed and implemented an integrated Moodle-based e-learning system. Developed the front-end user interface for the PPID website using WordPress CMS, and analyzed system requirements to optimize IT operational workflows.",
      tech: ["Moodle LMS", "WordPress CMS", "UI/UX Design", "System Analysis"] 
    },
    {
      id: 2,
      role: "Freelance Front-End Developer",
      company: "Prawira Hirya",
      period: "Sep 2025 - Feb 2026",
      description: "Designed and developed a responsive and interactive user interface for the Police Academy Class of 2018 website. Integrated RESTful APIs to ensure seamless data communication and optimized data fetching performance.",
      tech: ["React.js", "RESTful API", "Tailwind CSS", "State Management"]
    },
    {
      id: 3,
      role: "Front-End Developer (Independent Study)",
      company: "PT. Educa Sisfomedia Indonesia",
      period: "Feb 2024 - Jun 2024",
      description: "Applied programming logic to improve code efficiency. Deepened JavaScript knowledge to build dynamic user interfaces and successfully developed a GroceryShop website implementing modern front-end technologies.",
      tech: ["JavaScript (ES6+)", "Vue.js / React.js", "Bootstrap / Sass", "Team Collaboration"]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Experience</span>
        </h2>

        {/* MAIN CONTAINER */}
        <div className="relative space-y-12">
          
          {/* --- VERTICAL LINE --- */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              
              {/* --- DOT INDICATOR --- */}
              <div className="absolute top-0 left-4 md:left-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full border-4 border-white shadow-md -translate-x-1/2 z-10"></div>

              {/* --- CONTENT LAYOUT --- */}
              <div className={`md:flex items-start justify-between ${exp.id % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* 1. Timeline Side (Desktop) */}
                <div className={`hidden md:block w-[45%] ${exp.id % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold text-sm tracking-wider bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                    {exp.period}
                  </span>
                </div>

                {/* 2. Card Side (Main Content) */}
                <div className="ml-12 md:ml-0 md:w-[45%] bg-white border border-slate-100 p-6 rounded-2xl hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-xl relative">
                  
                  {/* Timeline (Mobile) */}
                  <span className="md:hidden inline-block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold text-xs bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    {exp.period}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {exp.role}
                  </h3>
                  
                  {/* Company Name */}
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-semibold text-sm mb-4">
                    {exp.company}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech Stack Tags */}
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