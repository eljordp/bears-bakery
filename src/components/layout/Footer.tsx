export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-zine mx-auto px-5 py-14 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="font-display text-3xl md:text-4xl">
              Bear&rsquo;s Bakery
            </div>
            <p className="mt-4 max-w-md font-serif italic leading-relaxed text-ivory/65">
              Slow-fermented sourdough and sweet treats from a sixty-year
              Italian starter. Baked on the Big Island.
            </p>
          </div>
          <div className="font-serif italic text-ivory/70 md:text-right">
            <a
              href="mailto:hello@bearsbakery.com"
              className="block transition-colors hover:text-oat"
            >
              hello@bearsbakery.com
            </a>
            <a
              href="https://instagram.com/bearsbakery"
              className="mt-2 block transition-colors hover:text-oat"
            >
              @bearsbakery
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-ivory/15 pt-6 font-serif italic text-sm text-ivory/45">
          Bear&rsquo;s Bakery &middot; Big Island &middot;{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
