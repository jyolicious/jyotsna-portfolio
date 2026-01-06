import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Hackathons from "./sections/Hackathons";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero /> 
      <About />
      <Experience />
      <Projects />
      <Hackathons />
      <Contact />
    </div>
  );
}
