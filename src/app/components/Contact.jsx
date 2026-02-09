const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold">
          Let's Work <span className="text-blue-500">Together</span>
        </h2>
        
        <p className="text-gray-300 text-lg">
          Saya saat ini terbuka untuk kesempatan kerja *Full-time* maupun *Freelance*. 
          Jika Anda mencari developer yang antusias dan siap belajar, mari berdiskusi!
        </p>

        <div className="pt-8">
          <a 
            href="mailto:andikadzaki0@gmail.com" 
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
          >
            Say Hello 👋
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          atau email manual ke: <br/>
          <span className="text-white font-mono">andikadzaki0@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;