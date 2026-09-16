import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Chatbot from "./components/Chatbot";
import Seo from "./components/Seo";
import NotFound from "./components/NotFound";

function App() {
  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, "") || "/";
  const isServicesPage = pathname === "/tjenester" || pathname.startsWith("/tjenester/") || pathname === "/packages";
  const isAboutPage = pathname === "/om-oss";
  const isContactPage = pathname === "/kontakt";
  const isPrivacyPage = pathname === "/personvern";
  const isHomePage = pathname === "/";
  const isKnownRoute = isHomePage || isServicesPage || isAboutPage || isContactPage || isPrivacyPage;

  return (
    <div className="min-h-screen bg-kodela-black text-kodela-cream">
      <a href="#main-content" className="sr-only z-[1000] bg-kodela-gold p-3 text-kodela-black focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Hopp til hovedinnhold</a>
      <Header />
      <div id="main-content">
        {!isKnownRoute ? <NotFound /> : isServicesPage ? <Packages /> : isAboutPage ? <><Seo title="Om Kodela Studio | Webdesign og utvikling" description="Møt teamet bak Kodela Studio. Tre utviklere med styrker innen webdesign, UX, utvikling og sikkerhet." path="/om-oss"/><About page /></> : isContactPage ? <Contact /> : isPrivacyPage ? <Privacy /> : <><Seo title="Kodela Studio | Nettsider for små bedrifter" description="Kodela Studio designer og utvikler profesjonelle, raske og mobilvennlige nettsider for små bedrifter. Nettside fra 14 900 kr eks. mva." path="/"/><Hero /><Services /><About /></>}
      </div>
      <Footer />
      {isKnownRoute && <Chatbot />}
    </div>
  );
}

export default App;
