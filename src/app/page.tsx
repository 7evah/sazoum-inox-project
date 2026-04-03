import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import DomainesActivite from '@/components/domaines-activite';
import BannerStrip from '@/components/banner-strip';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SAZOUM INOX",
  description:
    "Spécialiste depuis 20 ans en chaudronnerie, ferronnerie d'art, décoration design et aménagement en acier inoxydable à Mohammedia, Maroc.",
  url: "https://www.sazoum-inox.com",
  telephone: "+212661425538",
  email: "sazoum.inox@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hassania 2 Bloc A Rcd Mag N° 127",
    addressLocality: "Mohammedia",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.7056,
    longitude: -7.3698,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
  image: "https://www.sazoum-inox.com/balcony-enhanced.png",
  priceRange: "$$",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <BannerStrip />
        <DomainesActivite />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
