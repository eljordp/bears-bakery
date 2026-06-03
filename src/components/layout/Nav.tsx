import { ShoppingBag } from "lucide-react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-ivory/95 backdrop-blur border-b border-ink/15">
      <div className="max-w-zine mx-auto px-5 md:px-10 py-4 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-lg md:text-xl text-ink lowercase"
        >
          bear&rsquo;s bakery
        </a>
        <nav className="hidden sm:flex items-center gap-6 md:gap-9 font-serif italic text-sm md:text-base text-ink/85">
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
        <a
          href="mailto:hello@bearsbakery.com?subject=Reserve%20a%20Saturday%20loaf"
          className="inline-flex items-center gap-2 rounded-md bg-ink px-3.5 py-2 text-sm font-serif italic text-ivory transition-colors hover:bg-umber md:px-4"
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={1.7} />
          <span>Reserve</span>
        </a>
      </div>
    </header>
  );
}
