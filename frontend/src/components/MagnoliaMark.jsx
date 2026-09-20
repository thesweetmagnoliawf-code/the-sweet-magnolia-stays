export const MagnoliaMark = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className={className}
    aria-hidden="true"
    data-testid="magnolia-mark"
  >
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <ellipse
        key={angle}
        cx="50"
        cy="31"
        rx="8.5"
        ry="21"
        stroke="currentColor"
        strokeWidth="1.1"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="3.5" fill="currentColor" />
  </svg>
);
