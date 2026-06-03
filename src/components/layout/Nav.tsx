import { useEffect, useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our Story" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-bark/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl md:text-2xl tracking-tightest text-bark"
        >
          Bear&rsquo;s Bakery
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide uppercase">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-bark/80 hover:text-terracotta transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#menu"
          className="text-xs md:text-sm uppercase tracking-[0.18em] px-5 py-3 bg-bark text-cream hover:bg-ember transition-colors rounded-full"
        >
          Order
        </a>
      </div>
    </header>
  );
}
