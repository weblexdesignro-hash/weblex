type IconName =
  | "globe"
  | "cart"
  | "search"
  | "megaphone"
  | "wrench"
  | "camera"
  | "refresh"
  | "arrow"
  | "check"
  | "star";

const paths: Record<IconName, string> = {
  globe:
    "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z",
  cart: "M3 3h2l2.4 12.2a2 2 0 002 1.8h8.2a2 2 0 002-1.6L21 8H6M9 21a1 1 0 100-2 1 1 0 000 2zM18 21a1 1 0 100-2 1 1 0 000 2z",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
  megaphone: "M3 11v2a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1zM14 8a4 4 0 010 8M17 5a8 8 0 010 14",
  wrench:
    "M14.7 6.3a4 4 0 10-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2-2 2.6-2.6z",
  camera:
    "M4 7h3l2-2h6l2 2h3a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1zM12 17a4 4 0 100-8 4 4 0 000 8z",
  refresh: "M3 12a9 9 0 0115.4-6.4L21 8M21 3v5h-5M21 12a9 9 0 01-15.4 6.4L3 16M3 21v-5h5",
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 13l4 4L19 7",
  star: "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L6 21l1.7-7L2.3 9.2l7.1-.6L12 2z",
};

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
