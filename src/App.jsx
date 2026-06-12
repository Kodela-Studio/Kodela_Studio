import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-kodela-black text-kodela-cream">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
