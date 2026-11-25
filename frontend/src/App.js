import { useEffect, useState } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const wakeForestReviews = [
  ["Aaron", "RJ and Jay were responsive and accommodating, and the home was clean and uncluttered."],
  ["Shawn", "The home suited the trip perfectly, and parking right out front was a plus."],
  ["Eleanor", "The home was well maintained and conveniently located for a concert. The street side could get noisy, but the garage side was quiet and the hosts quickly helped with a door issue."],
  ["Kathleen", "A comfortable, well-appointed place for a work trip, with dinner spots a walk away in downtown Wake Forest."],
  ["Monique", "A quiet, walkable spot that matched the listing and was just right for a quick North Carolina stay."],
  ["Nidia", "The home was clean, easy to find in downtown Wake Forest, and matched the listing."],
  ["Scott", "Loved the garage and being able to walk for coffee, pizza, and a visit to the college. The hosts quickly resolved a Wi-Fi concern."],
  ["Barb", "The home had everything needed for a quick overnight stay, and they'd happily return."],
  ["Christine", "The home was beautiful and clean, the beds were comfortable, and they'd recommend it to friends and family."],
  ["Melody", "A spacious, clean home in an excellent location, with responsive owners and good value."],
  ["Paul", "The home felt new and clean, and the host's care came through in the setup and communication."],
  ["Aaron James", "The hosts paid attention to the small details, and they'd happily stay again."],
  ["Laynie", "A beautiful home with accommodating hosts that fit exactly what they were looking for."],
  ["Eric", "An easy walk to class at the seminary and a comfortable place to unwind afterward."],
  ["Namrata", "The central location and thoughtful setup made it easy for the family to settle in."],
  ["Philip", "Appreciated the tidy home, easy-to-use appliances, and electric kettle."],
  ["Arianna", "A beautiful, clean home that made it easy to visit family nearby."],
  ["Mekia", "Especially loved the beds and the generous space. The home looked just like its photos."],
  ["Rene", "Gave the stay a positive overall review."],
  ["Kris", "Enjoyed the natural light, comfortable beds, well-equipped kitchen, and downtown location."],
  ["Aaliyah", "Found the home clean, spacious, and easy to find, and would book it again."],
  ["Mohamed", "A clean, beautiful home that felt new and had everything the family needed."],
  ["Melody L.", "In town for a wedding, this guest appreciated the spotless home, thoughtful bedding and bath amenities, and nearby shops and restaurants.", "Vrbo"],
];

const raleighReviews = [
  ["William", "The family had room to spread out, and the home was a short drive from WakeMed Soccer Park. Check-in was smooth and the kitchen was well stocked."],
  ["Grant", "Enjoyed the stay."],
  ["Phyllis", "A frequent Raleigh visitor who praised the home and host and said this would be their first choice for future trips."],
  ["Nick", "A spotless, comfortable townhome with great amenities and a welcoming host."],
];

const properties = [
  {
    name: "Wake Forest",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1746080455304621391/original/52fa2424-33ec-4dbd-85f2-418e509e6e16.jpeg?im_w=960",
    alt: "Wake Forest Airbnb cover photo",
    description: "Stay in downtown Wake Forest with a dedicated home office, 2 Gig fiber Wi-Fi, and a private garage with Level 2 EV charging.",
    reviews: wakeForestReviews,
    vrbo: "https://www.vrbo.com/en-gb/p5451785vb",
    guide: "/wake-forest/sleeping-arrangement/",
    airbnb: "https://www.airbnb.com/rooms/1746080455304621391",
  },
  {
    name: "Raleigh/Cary",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1810285332142315408/original/3d60ce07-12ea-49d1-9075-2ba4dcea9017.jpeg?im_w=960",
    alt: "Raleigh/Cary Airbnb cover photo",
    description: "Bring the whole group to a four-bedroom home for up to 12 guests, with a game room and Google Fiber near Fenton.",
    reviews: raleighReviews,
    guide: "/raleigh/sleeping-arrangement/",
    airbnb: "https://www.airbnb.com/rooms/1810285332142315408",
  },
];

function PropertyReviews({ name, reviews, airbnb, vrbo }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!playing || hovering || reviews.length < 2) return;
    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setIndex((current) => (current + 1) % reviews.length);
      }
    }, 9000);
    return () => window.clearInterval(interval);
  }, [playing, hovering, reviews.length]);

  function step(offset) {
    setPlaying(false);
    setIndex((current) => (current + offset + reviews.length) % reviews.length);
  }

  const controlClass = "min-h-11 rounded-md px-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <section
      aria-label={`${name} guest reviews`}
      className="w-full rounded-lg border border-[#232F26]/15 bg-[#F7F5F0] p-4"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <h4 className="font-semibold">Guest reviews</h4>
        <span className="text-lg tracking-wide text-[#75531F]" role="img" aria-label="5 out of 5 stars">★★★★★</span>
      </div>
      <div className="mt-2 grid" aria-live={playing ? "off" : "polite"}>
        {reviews.map(([guest, summary, platform = "Airbnb"], reviewIndex) => (
          <div
            key={`${guest}-${platform}`}
            className={`col-start-1 row-start-1 ${reviewIndex === index ? "" : "invisible"}`}
            aria-hidden={reviewIndex !== index}
          >
            <p className="leading-relaxed">{summary}</p>
            <p className="mt-2 text-sm font-medium">{guest} · {platform} review summary</p>
          </div>
        ))}
      </div>
      {reviews.length > 1 && (
        <div className="mt-2 flex flex-wrap items-center gap-x-2">
          <button type="button" className={controlClass} onClick={() => step(-1)} aria-label={`Previous ${name} review`}>Previous</button>
          <span className="text-sm tabular-nums" aria-label={`Review ${index + 1} of ${reviews.length}`}>{index + 1} / {reviews.length}</span>
          <button type="button" className={controlClass} onClick={() => step(1)} aria-label={`Next ${name} review`}>Next</button>
          <button type="button" className={controlClass} onClick={() => setPlaying((current) => !current)} aria-label={`${playing ? "Pause" : "Play"} ${name} reviews`}>{playing ? "Pause" : "Play"}</button>
        </div>
      )}
      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <a className="underline underline-offset-4" href={airbnb}>Read reviews on Airbnb<span className="sr-only"> for {name}</span></a>
        {vrbo && <a className="underline underline-offset-4" href={vrbo}>Read reviews on Vrbo<span className="sr-only"> for {name}</span></a>}
      </div>
    </section>
  );
}

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
        {properties.map(({ name, image, alt, description, guide, airbnb, reviews, vrbo }) => (
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
              <PropertyReviews name={name} reviews={reviews} airbnb={airbnb} vrbo={vrbo} />
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
