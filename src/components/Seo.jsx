import { useEffect } from "react";

const SITE_URL = "https://kodelastudio.no";

export default function Seo({ title, description, path = "/", type = "website", schema = [] }) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
    document.title = title;

    const setMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    };

    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: type });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    setMeta('meta[property="og:locale"]', { property: "og:locale", content: "nb_NO" });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Kodela Studio" });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    document.head.querySelectorAll('script[data-kodela-schema="true"]').forEach((node) => node.remove());
    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Kodela Studio",
      url: SITE_URL,
      email: "post@kodelastudio.no",
      areaServed: "NO",
      knowsLanguage: "nb-NO",
      description: "Kodela Studio designer og utvikler profesjonelle, mobilvennlige nettsider og digitale løsninger for små bedrifter."
    };
    [organization, ...schema].forEach((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.kodelaSchema = "true";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, [title, description, path, type, schema]);

  return null;
}
