const PHRASES = ["Beautiful stays.", "Thoughtful homes.", "Seamless living."];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {PHRASES.map((text) => (
      <span key={text} className="flex items-center">
        <span className="whitespace-nowrap font-display text-4xl italic text-[#232F26] sm:text-6xl lg:text-7xl">
          {text}
        </span>
        <span className="mx-10 h-2 w-2 shrink-0 rounded-full bg-[#C4A484]" aria-hidden="true" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <section
      data-testid="marquee-section"
      className="overflow-hidden border-y border-[#1A1B1A]/10 py-12 sm:py-16"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </section>
  );
}
