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
          {/* Underline */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Storytelling */}
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              For me, web development is not just about writing lines of code, but the art of 
              <span className="text-slate-900 font-bold"> translating ideas into digital reality</span>. 
              As an Informatics Engineering graduate, I have a strong logical foundation, but my heart fell in love with the beauty of user interfaces (Frontend).
            </p>
            
            <p>
              I enjoy the challenge of creating websites that not only function seamlessly but are also <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold">fast, responsive, and user-friendly</span>. 
              My current specialty lies within the <span className="text-slate-900 font-bold">React & Next.js</span> ecosystem, 
              where I continuously explore the best practices to build modern web applications.
            </p>

            <p>
              Beyond the screen, I am an enthusiastic learner. I believe that technology evolves rapidly, and adaptability is a developer&apos;s greatest asset.
            </p>
          </div>

          {/* Right Column: Info Cards */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Card 1: Education */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>
              <p className="text-slate-500">Bachelor of Informatics Engineering</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold">Esa Unggul University</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Graduated 2025</p>
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