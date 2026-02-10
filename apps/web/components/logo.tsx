export function Logo() {
  return (
    <svg
      width="180"
      height="40"
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Schedulr Logo"
    >
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#2563eb" />
      <circle cx="20" cy="20" r="10" fill="#fff" />
      <path
        d="M20 10v10l7 7"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="48"
        y="27"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="bold"
        fontSize="24"
        fill="#2563eb"
        letterSpacing="0.05em"
      >
        Schedulr
      </text>
    </svg>
  );
}
