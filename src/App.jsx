import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, "");
  const isPackagesPage = pathname === "/packages";
  const isAboutPage = pathname === "/om-oss";
  const isContactPage = pathname === "/kontakt";

  return (
    <div className="min-h-screen bg-kodela-black text-kodela-cream">
      <Header />
      {isPackagesPage ? <Packages /> : isAboutPage ? <About page /> : isContactPage ? <Contact /> : <><Hero /><Services /><About /></>}
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
