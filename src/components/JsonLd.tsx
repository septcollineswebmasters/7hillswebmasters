import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/logo.svg`,
    priceRange: "$$",
    areaServed: ["United States", "India", "Worldwide"],
    knowsAbout: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Conversion Tracking",
      "Pixel Setup",
      "Conversion Rate Optimization",
      "GTM Cleanup",
      "Tracking Audit",
      "Web Analytics",
    ],
    address: siteConfig.locations.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: loc.region,
      postalCode: loc.postalCode,
      addressCountry: loc.country === "USA" ? "US" : "IN",
    })),
    location: siteConfig.locations.map((loc) => ({
      "@type": "Place",
      name: `${siteConfig.name} — ${loc.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.city,
        addressRegion: loc.region,
        postalCode: loc.postalCode,
        addressCountry: loc.country === "USA" ? "US" : "IN",
      },
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: ["English"],
      },
    ],
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  };

  const services = siteConfig.services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: ["United States", "India", "Worldwide"],
    url: `${siteConfig.url}/#services`,
  }));

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const speakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: `${siteConfig.name} | GA4, GTM & Conversion Tracking Agency`,
    description: siteConfig.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".aeo-answer", ".hero-lead", "h1"],
    },
  };

  const graph = [organization, website, faq, speakable, ...services];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
