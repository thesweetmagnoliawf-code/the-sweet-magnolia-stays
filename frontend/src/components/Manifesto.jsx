import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const CHAPTERS = [
  { n: "01", title: "Beautiful Stays", line: "Booking a getaway, made gracious." },
  { n: "02", title: "Thoughtful Homes", line: "Properties you can truly call home." },
  { n: "03", title: "Seamless Living", line: "Effortless rental management, all in one place." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.12, ease: EASE },
  }),
};

export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      data-testid="manifesto-section"
      className="px-6 py-28 sm:py-40"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="lg:col-span-5"
        >
          <div className="overflow-hidden">
            <motion.img
              style={{ y: imgY }}
              src={process.env.PUBLIC_URL + "/the-sweet-magnolia-logo.png"}
              alt="A white magnolia blossom in soft light"
              data-testid="manifesto-image"
              className="aspect-[3/4] w-full object-contain"
            />
          </div>
        </motion.div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.4em] text-[#4A4D4A]"
          >
            Our Promise
          </motion.p>

          <motion.p
            data-testid="manifesto-text"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="mt-8 max-w-xl font-display text-2xl leading-snug text-[#1A1B1A] sm:text-3xl"
          >
            Whether you&rsquo;re booking a getaway or calling one of our properties home,
            The Sweet Magnolia brings comfort, thoughtful hospitality, and effortless
            rental management together in one place.
          </motion.p>

          <div className="mt-16 divide-y divide-[#1A1B1A]/10 border-y border-[#1A1B1A]/10">
            {CHAPTERS.map((chapter, i) => (
              <motion.div
                key={chapter.n}
                data-testid={`chapter-${chapter.n}`}
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group flex items-baseline gap-6 py-6 sm:gap-10"
              >
                <span className="font-display text-sm italic text-[#C4A484]">{chapter.n}</span>
                <div>
                  <h3 className="font-display text-2xl text-[#232F26] transition-colors duration-500 group-hover:text-[#C4A484] sm:text-3xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#4A4D4A]">{chapter.line}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
