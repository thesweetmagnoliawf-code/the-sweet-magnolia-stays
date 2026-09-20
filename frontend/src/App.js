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
        <Hero />
        <Marquee />
        <Manifesto />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
