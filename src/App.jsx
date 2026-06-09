import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-kodela-black text-kodela-cream">
      <Header />
      <Hero />
      <Footer />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
