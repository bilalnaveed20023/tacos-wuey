import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Chef from "@/components/Chef";
import Menu from "@/components/Menu";
import Shots from "@/components/Shots";
import Market from "@/components/Market";
import Visit from "@/components/Visit";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: ["Mexican", "Tacos", "Birria"],
  telephone: site.tel,
  email: site.email,
  priceRange: "$$",
  acceptsReservations: true,
  address: { "@type": "PostalAddress", streetAddress: site.street, addressLocality: "Detroit", addressRegion: "MI", postalCode: site.zip, addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: site.lat, longitude: site.lng },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "16:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "11:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "21:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating, reviewCount: site.reviewCount },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Chef />
        <Menu />
        <Shots />
        <Market />
        <Visit />
        <Reviews />
      </main>
      <Footer />
      <StickyBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
