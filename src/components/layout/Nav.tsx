import { ShoppingBag } from "lucide-react";
import type { ThemeId } from "../../theme";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

type NavProps = {
  theme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
};

export default function Nav({ theme, onThemeChange }: NavProps) {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-ivory/95 backdrop-blur border-b border-ink/15">
      <div className="max-w-zine mx-auto px-5 md:px-10 py-4 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-base text-ink lowercase whitespace-nowrap sm:text-lg md:text-xl"
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
        <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
        <a
          href="mailto:hello@bearsbakery.com?subject=Reserve%20a%20Saturday%20loaf"
          className="inline-flex items-center gap-2 rounded-md bg-ink px-3 py-2 text-sm font-serif italic text-ivory transition-colors hover:bg-umber sm:px-3.5 md:px-4"
          aria-label="Reserve a Saturday loaf"
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={1.7} />
          <span className="hidden sm:inline">Reserve</span>
        </a>
      </div>
    </header>
  );
}
