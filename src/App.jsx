import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Packages from "./components/Packages";
import Chatbot from "./components/Chatbot";

function App() {
  const isPackagesPage = window.location.pathname === "/packages";

  return (
    <div className="min-h-screen bg-kodela-black text-kodela-cream">
      <Header />

      {isPackagesPage ? (
        <Packages />
      ) : (
        <>
          <Hero />
          <Services />
          <About />
          <Projects />
        </>
      )}

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
