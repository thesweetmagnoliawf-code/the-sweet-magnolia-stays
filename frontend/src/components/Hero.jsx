import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLine } from "@/components/MaskedLine";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="flex flex-col items-center text-center"
      >
        <motion.p
          data-testid="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="text-[11px] uppercase tracking-[0.4em] text-[#4A4D4A]"
        >
          Welcome to
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
          className="mt-6"
        >
          <img
            src={process.env.PUBLIC_URL + "/the-sweet-magnolia-logo.png"}
            alt="The Sweet Magnolia — Stays · Homes · Hospitality"
            data-testid="brand-logo"
            className="w-64 mix-blend-multiply sm:w-80 lg:w-96"
          />
          <h1 className="sr-only">The Sweet Magnolia</h1>
        </motion.div>

        <div
          data-testid="hero-intro-lines"
          className="mt-8 font-display text-xl leading-relaxed text-[#4A4D4A] sm:text-2xl"
        >
          <MaskedLine delay={0.65}>Beautiful stays.</MaskedLine>
          <MaskedLine delay={0.8}>Thoughtful homes.</MaskedLine>
          <MaskedLine delay={0.95}>Seamless living.</MaskedLine>
        </div>
      </motion.div>

      <motion.div
        data-testid="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#4A4D4A]">Scroll</span>
        <span className="animate-scroll-cue block h-12 w-px bg-[#232F26]" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
