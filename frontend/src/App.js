import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

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
        <nav aria-label="Raleigh guest guide" className="relative z-10 bg-[#232F26] px-4 py-3 text-center text-[#F7F5F0]">
          <a
            className="inline-block text-sm font-semibold underline underline-offset-4"
            href={process.env.PUBLIC_URL + "/raleigh/sleeping-arrangement/"}
          >
            The Sweet Magnolia Raleigh/Cary | Sleeping Arrangements (Beds &amp; Bedding)
          </a>
        </nav>
        <Hero />
        <Marquee />
        <Manifesto />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
