import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technical from "@/components/Technical";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-30 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#F5F3FF] rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-[#e0ebf9] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full">
        <Hero />
        <About />
        <Technical />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </section>
  );
}
