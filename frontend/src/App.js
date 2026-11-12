import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const properties = [
  {
    name: "Wake Forest",
    image: "/wake-forest/sleeping-arrangement/king-bedroom.webp",
    alt: "King bed in the Wake Forest primary bedroom",
    description: "Stay in downtown Wake Forest with a dedicated home office, 2 Gig fiber Wi-Fi, and a private garage with Level 2 EV charging.",
    guide: "/wake-forest/sleeping-arrangement/",
    airbnb: "https://www.airbnb.com/rooms/1746080455304621391",
  },
  {
    name: "Raleigh/Cary",
    image: "/raleigh/sleeping-arrangement/living-room.webp",
    alt: "Raleigh/Cary living room with two cream-colored sofas",
    description: "Bring the whole group to a four-bedroom home for up to 12 guests, with a game room and Google Fiber near Fenton.",
    guide: "/raleigh/sleeping-arrangement/",
  },
];

function PropertyCards() {
  return (
    <section
      aria-labelledby="property-heading"
      className="mx-auto max-w-6xl px-6 py-16 text-[#232F26] sm:px-12 sm:py-24"
    >
      <h2 id="property-heading" className="mb-8 text-center font-display text-5xl sm:text-6xl">
        Choose Your Stay
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {properties.map(({ name, image, alt, description, guide, airbnb }) => (
          <article key={name} className="flex flex-col overflow-hidden rounded-xl border border-[#232F26]/20 bg-[#FFFDF8]">
            <img
              className="aspect-[3/2] w-full object-cover"
              src={process.env.PUBLIC_URL + image}
              alt={alt}
              width="1050"
              height="700"
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-1 flex-col items-start gap-4 p-6 sm:p-8">
              <h3 className="font-display text-3xl font-semibold sm:text-4xl">{name}</h3>
              <p className="mb-2 flex-1 leading-relaxed">{description}</p>
              {airbnb && (
                <a className="rounded-full bg-[#232F26] px-5 py-3 text-sm font-semibold text-[#F7F5F0] hover:bg-[#38483C]" href={airbnb}>
                  Book {name} on Airbnb
                </a>
              )}
              <a className="py-2 text-sm font-semibold underline underline-offset-4" href={process.env.PUBLIC_URL + guide}>
                View sleeping arrangements
                <span className="sr-only"> for {name}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      data-testid="sweet-magnolia-page"
      className="min-h-screen bg-[#F7F5F0] font-body text-[#1A1B1A] antialiased"
    >
      <div className="grain-overlay" aria-hidden="true" />
      <main>
        <nav aria-label="Sleeping arrangements" className="relative z-10 bg-[#232F26] px-4 py-3 text-center text-[#F7F5F0]">
          <a
            className="inline-block text-sm font-semibold underline underline-offset-4"
            href={process.env.PUBLIC_URL + "/sleeping-arrangements/"}
          >
            Sleeping Arrangements (Beds &amp; Bedding)
          </a>
        </nav>
        <Hero />
        <PropertyCards />
        <Marquee />
        <Manifesto />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
