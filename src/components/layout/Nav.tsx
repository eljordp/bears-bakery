const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-ivory border-b border-ink/15">
      <div className="max-w-zine mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg md:text-xl tracking-tightest text-ink lowercase"
        >
          bear&rsquo;s bakery
        </a>
        <nav className="flex items-center gap-7 md:gap-10 font-serif italic text-sm md:text-base text-ink/85">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-umber transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
