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
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1746080455304621391/original/52fa2424-33ec-4dbd-85f2-418e509e6e16.jpeg?im_w=960",
    alt: "Wake Forest Airbnb cover photo",
    description: "Stay in downtown Wake Forest with a dedicated home office, 2 Gig fiber Wi-Fi, and a private garage with Level 2 EV charging.",
    airbnbId: "1746080455304621391",
    vrbo: "https://www.vrbo.com/en-gb/p5451785vb",
    guide: "/wake-forest/sleeping-arrangement/",
    airbnb: "https://www.airbnb.com/rooms/1746080455304621391",
  },
  {
    name: "Raleigh/Cary",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1810285332142315408/original/3d60ce07-12ea-49d1-9075-2ba4dcea9017.jpeg?im_w=960",
    alt: "Raleigh/Cary Airbnb cover photo",
    description: "Bring the whole group to a four-bedroom home for up to 12 guests, with a game room and Google Fiber near Fenton.",
    airbnbId: "1810285332142315408",
    guide: "/raleigh/sleeping-arrangement/",
    airbnb: "https://www.airbnb.com/rooms/1810285332142315408",
  },
];

function AirbnbListingPreview({ name, airbnbId, airbnb }) {
  const embedLink = `${airbnb}?adults=1&s=66&source=embed_widget`;

  return (
    <section aria-label={`${name} Airbnb reviews`} className="w-full">
      <div
        className="airbnb-embed-frame mx-auto max-w-[450px] rounded-lg bg-[#F7F5F0]"
        data-id={airbnbId}
        data-view="home"
        data-hide-price="true"
        data-width="100%"
        style={{ minHeight: 300 }}
      >
        <a className="inline-block p-4 underline underline-offset-4" href={embedLink}>
          View {name} on Airbnb
        </a>
      </div>
      <a className="mt-2 inline-block text-sm underline underline-offset-4" href={airbnb}>
        Read all Airbnb reviews<span className="sr-only"> for {name}</span>
      </a>
    </section>
  );
}

function PropertyCards() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.airbnb.com/embeddable/airbnb_jssdk";
    script.async = true;
    script.onload = () => {
      document.querySelectorAll(".airbnb-embed-frame iframe").forEach((frame) => {
        frame.title = frame.closest("section").getAttribute("aria-label");
      });
    };
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <section
      aria-labelledby="property-heading"
      className="mx-auto max-w-6xl px-6 py-16 text-[#232F26] sm:px-12 sm:py-24"
    >
      <h2 id="property-heading" className="mb-8 text-center font-display text-5xl sm:text-6xl">
        Choose Your Stay
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {properties.map(({ name, image, alt, description, guide, airbnb, airbnbId, vrbo }) => (
          <article key={name} className="flex flex-col overflow-hidden rounded-xl border border-[#232F26]/20 bg-[#FFFDF8]">
            <img
              className="aspect-[3/2] w-full object-cover"
              src={image}
              alt={alt}
              width="1050"
              height="700"
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-1 flex-col items-start gap-4 p-6 sm:p-8">
              <h3 className="font-display text-3xl font-semibold sm:text-4xl">{name}</h3>
              <AirbnbListingPreview name={name} airbnbId={airbnbId} airbnb={airbnb} />
              {vrbo && (
                <div className="w-full rounded-lg border border-[#232F26]/15 bg-[#F7F5F0] p-4">
                  <p className="leading-relaxed">
                    In town for a wedding, this guest appreciated the spotless home, thoughtful bedding and bath amenities, and nearby shops and restaurants.
                  </p>
                  <p className="mt-2 text-sm font-medium">Melody L. · Vrbo review summary</p>
                  <a className="mt-2 inline-block text-sm underline underline-offset-4" href={vrbo}>Read the review on Vrbo</a>
                </div>
              )}
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
