export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="flex flex-col items-center justify-between gap-4 border-t border-[#1A1B1A]/10 px-6 py-10 text-[10px] uppercase tracking-[0.3em] text-[#4A4D4A] sm:flex-row sm:px-12"
    >
      <span>&copy; 2026 The Sweet Magnolia</span>
      <span className="font-display text-sm normal-case italic tracking-normal">
        Stay awhile. Feel at home.
      </span>
      <span>Coming Soon</span>
    </footer>
  );
}
