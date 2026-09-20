import { motion } from "framer-motion";
import { MaskedLineInView } from "@/components/MaskedLine";
import { MagnoliaMark } from "@/components/MagnoliaMark";

const EASE = [0.22, 1, 0.36, 1];

export default function ComingSoon() {
  return (
    <section
      data-testid="coming-soon-section"
      className="relative overflow-hidden bg-[#232F26] px-6 py-32 text-center text-[#F7F5F0] sm:py-44"
    >
      <img
        src="https://images.unsplash.com/photo-1680773525468-eda783c5bfe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYm91dGlxdWUlMjBob3RlbCUyMGludGVyaW9yfGVufDB8fHx8MTc4OTg3NzA0M3ww&ixlib=rb-4.1.0&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#232F26] via-transparent to-[#232F26]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <MagnoliaMark className="h-12 w-12 text-[#C4A484]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 text-[11px] uppercase tracking-[0.4em] text-[#C4A484]"
        >
          Coming Soon
        </motion.p>

        <h2
          data-testid="coming-soon-notice"
          className="mt-6 font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl"
        >
          <MaskedLineInView delay={0.2}>Direct Booking</MaskedLineInView>
          <MaskedLineInView delay={0.35}>
            <span className="italic text-[#C4A484]">&amp;</span> Resident Portal
          </MaskedLineInView>
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
          className="mt-14 h-px w-24 origin-center bg-[#F7F5F0]/30"
          aria-hidden="true"
        />

        <p
          data-testid="closing-line"
          className="mt-14 font-display text-3xl italic leading-snug sm:text-4xl lg:text-5xl"
        >
          <MaskedLineInView delay={0.5}>Stay awhile.</MaskedLineInView>
          <MaskedLineInView delay={0.65}>Feel at home.</MaskedLineInView>
        </p>
      </div>
    </section>
  );
}
