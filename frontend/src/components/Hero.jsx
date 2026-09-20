import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLine } from "@/components/MaskedLine";
import { MagnoliaMark } from "@/components/MagnoliaMark";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
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
        <motion.div
          style={{ rotate: markRotate }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <MagnoliaMark className="h-16 w-16 text-[#232F26] sm:h-20 sm:w-20" />
        </motion.div>

        <motion.p
          data-testid="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="mt-12 text-[11px] uppercase tracking-[0.4em] text-[#4A4D4A]"
        >
          Welcome to
        </motion.p>

        <h1 data-testid="brand-logo" className="mt-5 font-display text-[#1A1B1A]">
          <MaskedLine delay={0.2} className="text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            The Sweet
          </MaskedLine>
          <MaskedLine
            delay={0.38}
            className="text-6xl italic tracking-tighter text-[#232F26] sm:text-7xl lg:text-8xl"
          >
            Magnolia
          </MaskedLine>
        </h1>

        <div
          data-testid="hero-intro-lines"
          className="mt-12 font-display text-xl leading-relaxed text-[#4A4D4A] sm:text-2xl"
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
