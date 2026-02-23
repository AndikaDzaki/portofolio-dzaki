const Contact = () => {
  return (
    // Background gradasi sangat lembut dari Putih ke Slate-50 sebagai penutup
    <section id="contact" className="py-24 px-4 bg-slate-50 text-slate-900 text-center border-t border-slate-100">
      <div className="max-w-2xl mx-auto space-y-6">
        
        <h2 className="text-4xl font-bold text-slate-900">
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Together</span>
        </h2>
        
        <p className="text-slate-600 text-lg">
          Saya saat ini terbuka untuk kesempatan kerja *Full-time* maupun *Freelance*. 
          Jika Anda mencari developer yang antusias dan siap belajar, mari berdiskusi!
        </p>

        {/* Container untuk Tombol (Dibuat berjajar di layar besar, bertumpuk di HP) */}
        <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Tombol Email (Primary - Pakai Gradasi) */}
          <a 
            href="mailto:andikadzaki0@gmail.com" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-1"
          >
            Say Hello lewat Email 👋
          </a>

          {/* Tombol WhatsApp (Secondary - Clean Style) */}
          <a 
            href="https://wa.me/6281286391735" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-white border-2 border-slate-200 hover:border-teal-400 text-slate-700 hover:text-teal-600 font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Chat via WhatsApp 💬
          </a>

        </div>

        {/* Teks Email Manual */}
        <p className="text-sm text-slate-500 mt-12">
          atau email manual ke: <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold font-mono text-base">
            andikadzaki0@gmail.com
          </span>
        </p>

      </div>
    </section>
  );
};

export default Contact;