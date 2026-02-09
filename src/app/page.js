// 1. IMPORT komponen Hero yang sudah kamu buat
import Hero from "../app/components/Hero"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    // 2. Main wrapper (pembungkus utama)
    <main className="flex min-h-screen flex-col bg-black">
      
      {/* 3. Panggil komponen Hero di sini */}
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      

    </main>
  );
}